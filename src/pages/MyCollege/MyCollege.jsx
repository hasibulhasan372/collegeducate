import { useContext } from "react";
import useCandidate from "../../hooks/useCandidate";
import { AuthContext } from "../../Provider/AuthProvider";
import Candidate from "./Candidate";
import useColleges from "../../hooks/useColleges";
import MyCollegeDetails from "./MyCollegeDetails";


const MyCollege = () => {
    const [candidates] = useCandidate();
    const {user} = useContext(AuthContext);
    const candidate = candidates?.find(student => student.user_mail === user?.email);
    const [colleges] = useColleges();
    const collegesInfo = colleges?.filter(college => college.name === candidate?.college) 
    console.log(collegesInfo)
    return (
        <div className="my-con lg:px-10">
            
                <Candidate candidate={candidate}></Candidate>
                {
                    collegesInfo.map(college => <MyCollegeDetails key={college._id} college={college}></MyCollegeDetails>)
                }
            
        </div>
    );
};

export default MyCollege;