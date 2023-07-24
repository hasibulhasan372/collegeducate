import useResearch from "../../../hooks/useResearch";


const Research = () => {
    const [researches] = useResearch();
    return (
        <div className="my-con md:px-10 lg:px-20 mb-10 md:16 lg:mb-20 ">
            <h2 className="py-10 text-center text-3xl font-bold text-slate-900">Research</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3   md:gap-4 px-4">
                {
                    researches.map(research => <div key={research._id} className="bg-[#80808022] py-2 px-4 rounded-xl flex items-center">
                        
                        <div>
                        <a href={research?.link} target="_blank" rel="noreferrer" className="cursor-pointer text-lg font-medium">{research?.name.slice(0,80)}...</a>
                        <h2>{research?.date}</h2>
                        </div>
                    </div>)
                }
            </div>
            
        </div>
    );
};

export default Research;

