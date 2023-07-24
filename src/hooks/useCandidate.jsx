import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const useCandidate = () => {
    const [candidate, setCandidate] = useState([]);
    const [loading, setLoading] = useState(true);
    const { user } = useContext(AuthContext)
    useEffect(() => {
        fetch(`https://collegeducate-server.vercel.app/candidateInfo/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setCandidate(data);
                setLoading(false)
            })
    }, [user])
    return [candidate, loading];
};

export default useCandidate;