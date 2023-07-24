import { useState } from "react";
import TopCollegeCard from "../../../components/Card/TopCollegeCard";
import useColleges from "../../../hooks/useColleges";


const TopCollege = () => {
    const [colleges] = useColleges();
    
    const [search, setSearch] = useState("");
    return (
        <div className="my-con mb-10 md:mb-14 lg:mb-20">
            <div className="text-center">
                <input type="search" name="search" onChange={(e) => setSearch(e.target.value.toLowerCase())} id="search" placeholder="Search " className="border border-slate-500 rounded-3xl  px-4 py-2 md:w-1/3 lg:w-4/12 placeholder:text-black text-black outline-none placeholder:text-center " />
            </div>

            <div className="grid lg:grid-cols-2 gap-x-10">
                    {
                        colleges.filter(college => {
                            return search.toLowerCase() === "" ? college : college.name.toLowerCase().includes(search)
                        }
                        ).slice(0,3).map(college=> <TopCollegeCard key={college._id} college={college} ></TopCollegeCard>)
                    }
            </div>

        </div>
    );
};

export default TopCollege;