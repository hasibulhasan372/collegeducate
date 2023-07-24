import { useContext } from "react";
import useUsers from "../../hooks/useUsers";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";


const Profile = () => {
    const {user} = useContext(AuthContext)
    const [users] = useUsers();
    const myInfo = users?.find(profile => profile?.email === user?.email)

    return (
        <div className="my-con  lg:px-44 py-10 mb-10 lg:mb-20 mx-auto bg-slate-300 mt-7 md:mt-10 lg:mt-20">
            <div className="flex flex-col justify-center items-center">
            <img src={myInfo?.photo} alt="profile photo" className="w-44 h-44 rounded-full" />
            <h3 className="font-bold text-xl md:text-3xl py-3">{myInfo?.name}</h3>
            <h4 className="font-medium text-lg">University: <span className="font-normal text-lg">{myInfo?.university}</span></h4>
            <h4 className="font-medium text-lg">Email: <span className="font-normal text-lg">{myInfo?.userMail}</span></h4>
            <h4 className="font-medium text-lg">Address: <span className="font-normal text-lg">{myInfo?.address}</span></h4>
            <div className="mt-4">
            <Link className="py-2 px-4 border border-slate-500 rounded-lg text-lg font-semibold" to={`/update`}>Edit Profile</Link>
            </div>
            </div>
        </div>
    );
};

export default Profile;
