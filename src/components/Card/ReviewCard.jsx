import { Rating } from "@mui/material";


const ReviewCard = ({review}) => {
    const {rating, comment, commenter, photo} = review;
    return (
        <div className=" flex flex-col items-center justify-center px-3 md:px-20 space-y-2 mx-auto text-white">
            <h2>
                <Rating value={rating} precision={0.5} readOnly name="read-only"></Rating>
            </h2>
            <p>{comment}</p>


            
            <img src={photo} alt="" className="w-20 h-20 rounded-full" />
           
            <h3 className="text-xl font-semibold">{commenter}</h3>
        </div>
    );
};

export default ReviewCard;