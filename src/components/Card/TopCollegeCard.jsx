import { Rating } from "@mui/material";
import { Link } from "react-router-dom";


const TopCollegeCard = ({ college }) => {
    const { name, admissionDate, events, img, sports, rating, published_paper, _id } = college;
    return (
        <div className="border mt-10 p-4 rounded-md border-slate-500">
            <div className=" flex flex-col-reverse lg:grid lg:grid-cols-3 ">
                <div className="col-span-2 space-y-2">
                    <h2 className="text-2xl font-semibold">{name}</h2>
                    <h2 className="font-bold">Admission: <span className="font-normal">{admissionDate}</span></h2>
                    <h2 className="font-bold">Events: <span>{events.map((event, index) => <p key={index} className="font-semibold pl-2"> {event?.name}.</p>)}</span></h2>
                    <h3 className="font-bold">Total Research: <span className="font-normal">{published_paper}</span></h3>
                    <h4 className="flex gap-x-3 font-bold">Sports: <span className="font-normal">{sports.map((sport, index) => <div key={index} className="flex"><p> {sport?.game}</p></div>)}</span></h4>
                    <div className="pt-4 flex justify-between items-center pr-4">
                        <Rating value={rating} name="read-only" readOnly precision={0.5}></Rating>
                    <Link to={`/details/${_id}`} className="border rounded-lg py-3 px-10 bg border-[#513DFF] text-[#000] font-semibold" >Details</Link>
                    </div>
                </div>
                <div className="lg:h-full">
                    <img src={img} alt="college" className="lg:h-full object-cover rounded-md" />
                </div>
                
                
            </div>
        </div>
    );
};

export default TopCollegeCard;