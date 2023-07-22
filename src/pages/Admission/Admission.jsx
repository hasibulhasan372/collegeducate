import { Link } from "react-router-dom";
import useColleges from "../../hooks/useColleges";



const Admission = () => {
    const [colleges] = useColleges()
    return (
        <div className="my-con lg:py-20 lg:px-20">
            <div className="grid grid-cols-3 gap-x-10">
                {
                    colleges?.map(college => <div key={college._id} className="relative">
                        <img src={college?.img} alt="" />
                        <span className="absolute bg-[#00000076] w-full h-full top-0"></span>
                        <Link className="text-2xl font-semibold absolute top-20 left-16 text-white" to={`/admissionForm/${college?._id}`}>{college?.name}</Link>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Admission;