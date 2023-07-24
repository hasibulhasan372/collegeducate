import { useEffect, useState } from "react";



const useGallery = () => {
    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch("https://collegeducate-server.vercel.app/gallery")
            .then(res => res.json())
            .then(data => {
                setPhotos(data);
                setLoading(false)
            })
    }, [])
    return [photos, loading];
};

export default useGallery;