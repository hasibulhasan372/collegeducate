
import useColleges from "../../../hooks/useColleges";


const Colleges = () => {
    const [colleges] = useColleges()
    return (
        <div className="my-con">
            <h2>Total College:{colleges.length}</h2>
            
        </div>
    );
};

export default Colleges;