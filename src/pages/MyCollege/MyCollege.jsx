import { useContext } from "react";
import useCandidate from "../../hooks/useCandidate";
import { AuthContext } from "../../Provider/AuthProvider";
import Candidate from "./Candidate";
import useColleges from "../../hooks/useColleges";
import TopCollegeCard from "../../components/Card/TopCollegeCard";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";


const MyCollege = () => {
    const [candidates] = useCandidate();
    const { user } = useContext(AuthContext);
    const candidate = candidates?.find(student => student.user_mail === user?.email);
    const [colleges] = useColleges();
    const collegesInfo = colleges?.filter(college => college.name === candidate?.college);


    const handleReview = (e) => {
        e.preventDefault()
        const comment = e.target.message.value;
        const rating = e.target.rating.value;
        console.log(comment, rating, candidate?.name)
        const review = {
            comment,
            rating: parseFloat(rating),
            commenter: candidate?.name,
            photo: candidate?.image
        };
        fetch("https://collegeducate-server.vercel.app/reviews", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast.success("Candidate information Saved")
                    e.target.value = " "
                }
            })
            .catch(error => console.log(error.message))


    }
    console.log(collegesInfo)
    return (
        <div className="my-con lg:px-10 my-10 md:my-20">
            {
                candidate ? <><div>

                    <Candidate Candidate candidate={candidate} ></Candidate >
                    <div className="md:px-20 sm:px-20">
                        {
                            collegesInfo.map(college => <TopCollegeCard key={college._id} college={college}></TopCollegeCard>)
                        }
                    </div>
                    <div className="mt-12 md:w-1/2 mx-auto px-10 sm:px-20 md:px-0 ">
                        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">Review</h2>
                        <form onSubmit={handleReview} className="space-y-4 w-full">
                            <div className="">
                                <label className="block mb-2"> Message</label>
                                <textarea name="message" id="message" cols="30" rows="6" className="border border-slate-500 pl-2 w-full rounded-md"></textarea>
                            </div>
                            <div>
                                <label htmlFor="" className="block mb-2">Give a Rating</label>
                                <input type="text" name="rating" id="rating" placeholder="1 to 5" className="pl-2 border border-slate-600 rounded-md py-1" />
                            </div>

                            <input type="submit" value="Feedback" min="0.00" step="0.001" max="1.00" className="border-2 border-yellow-400 rounded-lg bg-yellow-800 text-white px-4 py-2 font-bold cursor-pointer" />

                        </form>
                    </div>

                </div ></> :
                    <>
                        <h3 className="text-xl font-bold text-center">Please go admission page fill up the candidate form</h3>
                        <div className="text-center mt-8">
                            <Link to="/admission" className="rounded-md bg-purple-800 py-2 px-4 text-lg text-white font-semibold " >Admission</Link>
                        </div>
                    </>
            }
        </div>
    );
};

export default MyCollege;