import { useEffect, useState } from "react";



const useResearch = () => {
    const [researches, setResearches] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch("https://collegeducate-server.vercel.app/research")
            .then(res => res.json())
            .then(data => {
                setResearches(data);
                setLoading(false)
            })
    }, [])
    return [researches, loading];
};

export default useResearch;