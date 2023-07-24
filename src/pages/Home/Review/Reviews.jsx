import ReviewCard from "../../../components/Card/ReviewCard";
import useReview from "../../../hooks/useReview";
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const Reviews = () => {
    const [reviews] = useReview();
    return (
        <div className="my-con  rounded-md py-5 md:py-10">
            <h2 className="py-10 text-center text-3xl font-bold text-slate-900">Reviews</h2>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                
                    {
                        reviews.map(review => <SwiperSlide key={review._id} >
                           <ReviewCard review={review}></ReviewCard>
                        </SwiperSlide>)
                    }
                
            </Swiper>


        </div>
    );
};

export default Reviews;
