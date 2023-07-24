import { Rating } from "@mui/material";
import { Link } from "react-router-dom";


const CollegeCard = ({college}) => {
    const {name, admissionDate, events,  img, sports, rating, published_paper, _id} = college;
    return (
        <div className=" rounded-xl pb-8">
           <img src={img} alt="" className="rounded-xl"/>
            <h2>{name}</h2>
            <h4>Admission Date: {admissionDate}</h4>
            
            <h4 className="flex gap-x-3 font-semibold"><span className="font-normal">Sports:</span> {sports.map((sport, index) => <div key={index} className="flex"><p> {sport?.game}</p></div>)}</h4>
            <h4>Events: {events.map((event, index) => <p key={index} className="font-semibold pl-2"> {event?.name}.</p> )}</h4>
           <div className="flex items-center justify-between">
           <h4>Research: {published_paper}</h4>
           <Rating value={rating} precision={0.5} readOnly name="read-only"></Rating>
            
           </div>
           <div className="mt-6">
                <Link to={`/details/${_id}`} className="border rounded-lg py-3 px-10 bg border-[#513DFF] text-[#000] font-semibold" >Details</Link>
            </div>
        </div>
    );
};

export default CollegeCard;