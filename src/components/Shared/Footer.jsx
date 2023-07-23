
import { Link, NavLink } from "react-router-dom";
import fb from '../../assets/facebook.svg'
import youtube from '../../assets/youtube.svg'
import tiktok from '../../assets/tik_tok.svg'
import whatapp from '../../assets/whatsapp.svg'
import linkin from '../../assets/linkedin.svg'
import email from "../../assets/email 2.svg"

const Footer = () => {
    return (
        <div className=" pt-10 pb-6 px-2 lg:pt-20 lg:pb-10 xl:pt-14 xl:pb-8 bg-[#DFF4FF]">
            <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-x-12 lg:gap-x-1 xl:gap-x-12 gap-y-4 my-con">

                <div>
                    <p className=" pb-5 text-[#011E40] font-bold text-lg">Collegeducate</p>
                    <ul className="flex gap-x-2">
                        <li><Link><img src={fb} alt="" /></Link></li>
                        <li><Link><img src={youtube} alt="" /></Link></li>
                        <li><Link><img src={tiktok} alt="" /></Link></li>
                        <li><Link><img src={whatapp} alt="" /></Link></li>
                        <li><Link><img src={linkin} alt="" /></Link></li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-[22px] text-[#011E40] font-semibold mb-3">Quick link</h2>
                    <ul className="flex- flex-col space-y-1  md:space-y-2 md:text-lg font-medium text-[#2D5C94]">
                    <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/colleges">Colleges</NavLink></li>
                            <li><NavLink to="/admission">Admission</NavLink></li>
                            <li><NavLink to="/myCollege">My College</NavLink></li>
                    </ul>
                </div>
                <div className="col-span-2 md:col-span-1">
                    <h2 className="text-[22px] text-[#011E40] font-semibold mb-3">Address</h2>
                   <div className="grid grid-cols-2 md:grid-cols-1 items-start">
                   <div>
                        <h3 className="md::text-lg font-medium text-[#011E40]">Phone</h3>
                        <p className="md::text-lg  text-[#2D5C94]">+880 2 9822328</p>
                    </div>
                    <div className="md:py-3">
                        <h3 className="md::text-lg font-medium text-[#011E40]">Email</h3>
                        <p className="md::text-lg  text-[#2D5C94]">Info@college.com</p>
                    </div>
                    <div>
                        <h3 className="md:text-lg font-medium text-[#011E40]">Location</h3>
                        <p className="md:text-lg  text-[#2D5C94]">Flat 5/B, House#73, Road#
                            04, Block#C, NewYork, USA</p>
                    </div>
                   </div>
                </div>
                <div className="rounded-xl bg-white pl-12 lg:pl-4 xl:pl-12 pr-6 pt-10 pb-8 col-span-2 md:col-span-3 lg:col-span-1 xl:col-span-2">
                    <img src={email} alt="" />
                    <p className="text-[#696969] mt-4">If you have any question and quires then type mail and contact us or want real estate news and Investment </p>
                    <form className="mt-3 space-y-2 sm:space-x-3  md:space-x-3 lg:space-x-0 xl:space-x-3">
                        <input type="email" name="email" placeholder="your email address" className="border border-[#0092E0] rounded-[4px] py-3 pl-3" />
                        <input type="submit" value="Contact Us" className="border border-[#0092E0] rounded-[4px] py-3 pl-3 pr-6 bg-[#0092E0] text-white" />
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Footer;
