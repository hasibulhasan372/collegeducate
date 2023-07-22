import { useParams } from "react-router-dom";
import useColleges from "../../hooks/useColleges";
import { FaArrowRight } from "react-icons/fa";



const CollegeDetails = () => {
    const {id} = useParams();
    const [colleges] = useColleges();
  
        const selectedCollege = colleges?.find(college => college?._id === id);
        
    // const {name, admissionDate, events, research, img, sports, rating, about, admission_process, published_paper, _id} = selectedCollege;
    
    
    return (
        <div className="my-con lg:px-20 pb-20">
            <h2 className="py-10 text-5xl font-bold">{selectedCollege?.name}</h2>
            <img src="https://i.ibb.co/VTr8H5P/princeton-ban.png" alt="banner" className="w-full " />
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

            </div>
        </div>
    );
};

export default CollegeDetails;