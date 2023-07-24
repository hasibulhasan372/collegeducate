

const Candidate = ({candidate}) => {
    return (
        <div className="flex flex-col md:flex-row py-4 md:py-10 items-center bg-purple-100">
            <img src={candidate?.image} alt="" className="mb-5" />
            <div className="space-y-2">
            <h3 className="text-3xl font-bold">{candidate?.name}</h3>
            <h4 className="text-lg font-bold">Subject: <span className="text-base font-semibold">{candidate?.subject}</span></h4>
            <h4 className="text-lg font-bold">Email: <span className="text-blue-700 font-semibold underline">{candidate?.candidate_mail}</span></h4>
            <h4 className="text-lg font-bold">Date of Birth: <span className="text-base font-semibold">{candidate?.birth}</span></h4>
            <h4 className="text-lg font-bold">Contact: <span className="text-base font-semibold">{candidate?.phone}</span></h4>
            </div>
        </div>
    );
};

export default Candidate;