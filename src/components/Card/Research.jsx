import { FaArrowRight } from "react-icons/fa";


const Research = ({paper}) => {
    
    return (
        <div>
            <h2 className="text-lg font-semibold">{paper?.topic}</h2>
            <h3 className="text-sm font-bold py-1">{paper?.researcher}</h3>
            <h3 className="pb-3 text-sm">{paper?.publish_date}</h3>
            <h3>{paper?.details.slice(0,500)}......</h3>
            <a href={paper?.link} target="_blank" rel="noreferrer" className="text-red-500 font-bold flex items-center gap-x-2 mt-2">Read More<FaArrowRight></FaArrowRight></a>
            
        </div>
    );
};

export default Research;