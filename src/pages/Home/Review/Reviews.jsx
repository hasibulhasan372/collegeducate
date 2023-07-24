import ReviewCard from "../../../components/Card/ReviewCard";
import useReview from "../../../hooks/useReview";
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const Reviews = () => {
    const [reviews] = useReview();
    console.log(reviews)
    return (
        <div className="my-con lg:my-20 bg-green-600 rounded-md py-5 md:py-10">

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
