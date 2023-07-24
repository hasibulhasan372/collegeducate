
import CollegeCard from "../../../components/Card/CollegeCard";
import useColleges from "../../../hooks/useColleges";


const Colleges = () => {
    const [colleges] = useColleges()
    return (
        <div className="my-con mt-5 md:my-10 px-2 sm:px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 lg:gap-x-10 gap-y-10">
               {
                colleges.map(college => <CollegeCard key={college._id} college={college}></CollegeCard>)
               }
            </div>
            
        </div>
    );
};

export default Colleges;