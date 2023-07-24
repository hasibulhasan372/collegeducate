import { useEffect, useState } from "react";


const useReview = () => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch("https://collegeducate-server.vercel.app/reviews")
            .then(res => res.json())
            .then(data => {
                setReviews(data);
                setLoading(false)
            })
    }, [])
    return [reviews, loading];
};

export default useReview;