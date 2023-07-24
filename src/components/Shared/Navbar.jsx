import { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaBars} from "react-icons/fa"
import {BiChevronDown} from "react-icons/bi"
import {HiX} from "react-icons/hi"
import logo from "../../assets/logo.png"


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [open, setOpen] = useState(false);
    const [humMenu, setHumMenu] = useState(false);
    const navigate = useNavigate();


    const handleLogOut = () => {
        logOut();
        navigate("/");
    };
    
    return (
        <div className="border-b border-transparent shadow-md ">
            <div className="my-con ">
                <div className="flex justify-between items-center py-2 lg:py-0 px-3 md:px-4 lg:px-0">
                    <div className="hidden lg:block">
                        <img src={logo} alt="" className="w-24 h-24 " />
                    </div>
                    <div>
                    <button onClick={() => setHumMenu(!humMenu)} className="lg:hidden">
                        {
                            humMenu ? <HiX className="h-8 w-8"></HiX> : <FaBars className="h-8 w-8"></FaBars>
                        }
                    </button>
                        <ul className={`flex flex-col text-lg font-medium lg:flex-row items-center gap-x-20 gap-y-3 absolute lg:static z-50 ${ humMenu ? "left-0 top-16 bg-slate-400 lg:bg-none py-4 px-4": "left-0 -top-80"}`}>
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/colleges">Colleges</NavLink></li>
                            <li><NavLink to="/admission">Admission</NavLink></li>
                            <li><NavLink to="/myCollege">My College</NavLink></li>
                        </ul>
                    </div>
                    <div>
                        {
                            user?.email ? <div onClick={()=>setOpen(!open)}  className="relative cursor-pointer ">
                                <p className="text-black flex gap-x-1 font-medium items-center">{user?.displayName} <BiChevronDown className="text-2xl"></BiChevronDown></p>

                                {
                                    open ? <div className="text-black bg-slate-300 absolute p-2 rounded-sm top-6 right-0 text-sm w-[100px] space-y-1 font-semibold">
                                        <Link to="/profile">Your Profile</Link>
                                        <button onClick={handleLogOut}>LogOut</button>
                                    </div> : <></>
                                }
                            </div> :

                                <Link to="/login" className="py-2 px-4 border rounded-md bg-[#513DFF] text-white font-medium">Login</Link>
                        }
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Navbar;
