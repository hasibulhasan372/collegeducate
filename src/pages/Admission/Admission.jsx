import { Link } from "react-router-dom";
import useColleges from "../../hooks/useColleges";



const Admission = () => {
    const [colleges] = useColleges()
    return (
        <div className="my-con lg:py-20 py-10  px-2 sm:px-10 lg:px-20">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-6 rounded-md ">
                {
                    colleges?.map(college => <div key={college._id} className="relative rounded-md">
                        <img src={college?.img} alt="" className="rounded-md" />
                        <span className="absolute bg-[#00000076] w-full h-full top-0 rounded-md"></span>
                        <Link className="text-lg sm:text-2xl font-semibold absolute sm:top-20 top-10 md:top-8 lg:top-16 left-4 sm:left-5 md:left-16 text-white" to={`/admissionForm/${college?._id}`}>{college?.name}</Link>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Admission;