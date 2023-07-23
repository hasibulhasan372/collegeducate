import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="border-b border-transparent shadow-md px-2">
        <div className="my-con ">
            <div className="flex justify-between items-center py-2 md:py-6">
                <div><h3>Collegeducate</h3></div>
                <div>
                    <ul className="flex flex-col lg:flex-row items-center gap-x-20 gap-y-8">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/colleges">Colleges</NavLink></li>
                        <li><NavLink to="/admission">Admission</NavLink></li>
                        <li><NavLink to="/myCollege">My College</NavLink></li>
                    </ul>
                </div>
                <div>
                    <Link to="/login">Login</Link>
                </div>

            </div>
            </div>
        </div>
    );
};

export default Navbar;
