

const Events = ({event}) => {
    
    return (
        <div className=" hover:border-t-[2px] hover:border-purple-300 duration-300">
            <h3 className="text-lg font-semibold">{event?.name}</h3>
            <h5 className="text-sm font-bold py-3">{event?.topic}</h5>
            <p>{event?.details}</p>
            <div className="w-full mt-3 space-y-3">
            <h4 className="flex justify-between border-b-[2px] pb-2 border-slate-600">Time: <span>{event?.time}</span></h4>
            <h3 className="flex justify-between border-b-[2px] pb-2 border-slate-600">Place: <span className="w-1/2 text-right">{event?.location}</span></h3>
            <h4 className="flex justify-between border-b-[2px] pb-2 border-slate-600">Date: <span>{event?.date}</span></h4>
            </div>
        </div>
    );
};

export default Events;
