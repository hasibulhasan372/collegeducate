import useCandidate from "../../hooks/useCandidate";


const MyCollege = () => {
    const [candidates] = useCandidate();
    console.log(candidates)
    return (
        <div className="my-con">
            
        </div>
    );
};

export default MyCollege;