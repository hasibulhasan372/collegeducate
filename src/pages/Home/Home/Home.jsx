import Gallery from "../Gallery/Gallery";
import Research from "../Research/Research";
import Reviews from "../Review/Reviews";
import TopCollege from "../TopCollege/TopCollege";


const Home = () => {
    return (
        <div className=" mt-10 ">
            <TopCollege></TopCollege>
            <Gallery></Gallery>
            <Reviews></Reviews>
            <Research></Research>
        </div>
    );
};

export default Home;