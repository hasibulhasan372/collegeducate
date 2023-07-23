import { useParams } from "react-router-dom";
import useColleges from "../../hooks/useColleges";
import { FaArrowRight } from "react-icons/fa";
import Events from "../Card/Events";
import Research from "../Card/Research";
import Sport from "../Card/Sport";



const CollegeDetails = () => {
    const { id } = useParams();
    const [colleges] = useColleges();

    const selectedCollege = colleges?.find(college => college?._id === id);


    return (
        <div className="my-con lg:px-10 pb-20">
            <h2 className="py-10 text-5xl font-bold">{selectedCollege?.name}</h2>
            <img src={selectedCollege?.banner} alt="banner" className="w-full " />
            <p className="pt-6">{selectedCollege?.about}</p>

            <div className="mt-6">
                <h1 className="text-xl font-bold">Admission</h1>
                <div className="admission_table">
                    <p className="">SAT </p>
                    <p>{selectedCollege?.admission_process?.sat}</p>
                </div>
                <div className="admission_table">
                    <p className="">ACT</p>
                    <p>{selectedCollege?.admission_process?.act}</p>
                </div>
                <div className="admission_table">
                    <p className="">GPA</p>
                    <p>{selectedCollege?.admission_process?.gpa}</p>
                </div>
                <div className="admission_table">
                    <p className="">Admission Fee</p>
                    <p>${selectedCollege?.admission_process?.admission_fee}</p>
                </div>
                <div className="admission_table">
                    <p className="">Room and Board</p>
                    <p>${selectedCollege?.admission_process?.room_board}</p>
                </div>
                <div className="mt-5">
                    <a href={selectedCollege?.admission_process?.link} target="_blank" rel='noreferrer'
                        className="flex items-center gap-x-2 text-lg font-medium"
                    >See More <FaArrowRight></FaArrowRight></a>
                </div>

                <div>
                    <h2 className="text-xl font-bold pt-12 pb-6">Events</h2>

                    <div className="grid md:grid-cols-2 md:gap-x-4 md:gap-y-8 lg:gap-x-12 lg:gap-y-12">
                    {
                        selectedCollege?.events?.map((event, index) => <Events key={index} event={event}></Events>)
                    }
                    </div>
                </div>
                <div>
                    <h2 className="text-xl font-bold pt-12 pb-6">Research</h2>

                    <div className="grid md:grid-cols-2 md:gap-x-4 md:gap-y-8 lg:gap-x-12 lg:gap-y-12">
                    {
                        selectedCollege?.research?.map((paper, index) => <Research key={index} paper={paper}></Research>)
                    }
                    </div>
                </div>
                <div>
                    <h2 className="text-xl font-bold pt-12 pb-6">Sports</h2>

                    <div className="grid md:grid-cols-2 md:gap-x-4 md:gap-y-8 lg:gap-x-12 lg:gap-y-12">
                    {
                        selectedCollege?.sports?.map((sport, index) => <Sport key={index} sport={sport}></Sport>)
                    }
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CollegeDetails;