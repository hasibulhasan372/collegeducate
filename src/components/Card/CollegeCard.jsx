import { Rating } from "@mui/material";
import { Link } from "react-router-dom";


const CollegeCard = ({college}) => {
    const {name, admissionDate, events,  img, sports, rating, published_paper, _id} = college;
    return (
        <div className=" rounded-xl pb-8 space-y-3">
           <img src={img} alt="" className="rounded-xl"/>
            <h2 className="text-3xl font-bold">{name}</h2>
            <h4 className="font-semibold">Admission Date: <span className="font-normal">{admissionDate}</span></h4>
            
            <h4 className=" font-semibold flex  gap-x-3">Sports:<span className="font-normal flex gap-x-3">{sports.map((sport, index) => <div key={index} className="flex"><p> {sport?.game}</p></div>)}</span> </h4>
            <h4 className="font-semibold">Events: <span className="font-normal">{events.map((event, index) => <p key={index} className="font-normal"> {event?.name}.</p> )}</span></h4>
           <div className="flex items-center justify-between">
           <h4 className="font-semibold">Research: <span className="font-normal">{published_paper}</span></h4>
           <Rating value={rating} precision={0.5} readOnly name="read-only"></Rating>
           </div>
           <div className="pt-6">
                <Link to={`/details/${_id}`} className="border rounded-lg py-3 px-10 bg border-[#513DFF] text-[#513DFF] text-lg font-semibold " >Details</Link>
            </div>
        </div>
    );
};

export default CollegeCard;