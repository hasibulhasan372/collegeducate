import { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const handleLogOut = () => {
        logOut();
        navigate("/")
    }
    
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
                        {
                            user?.email ? <div onClick={()=>setOpen(!open)}  className="relative cursor-pointer ">
                                <p className="text-black">{user?.displayName}</p>

                                {
                                    open ? <div className="text-black bg-slate-300 absolute p-2 rounded-sm top-6 right-0 text-sm w-[100px] space-y-1 font-semibold">
                                        <Link to="/profile">Your Profile</Link>
                                        <button onClick={handleLogOut}>LogOut</button>
                                    </div> : <></>
                                }
                            </div> :

                                <Link to="/login">Login</Link>
                        }
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Navbar;
