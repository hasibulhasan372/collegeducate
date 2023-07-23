

const Sport = ({sport}) => {
    return (
        <div>
            <h2 className="text-lg font-semibold py-3">{sport?.game}</h2>
            <h2>{sport?.news}</h2>
        </div>
    );
};

export default Sport;
