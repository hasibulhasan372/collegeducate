import { useContext } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../Provider/AuthProvider";
import useUsers from "../../hooks/useUsers";
import { useNavigate } from "react-router-dom";



const UpdateProfile = () => {
    const { user } = useContext(AuthContext)
    const [users] = useUsers();
    const myInfo = users?.find(profile => profile?.email === user?.email)
    const navigate = useNavigate();

    const handleDollUpdate = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const userMail = form.userMail.value;
        const address = form.address.value;
        const university = form.university.value;


        const updateProfile = { name, userMail, address, university }


        fetch(`https://collegeducate-server.vercel.app/users/${myInfo?._id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updateProfile)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast("Profile Updated")
                    navigate("/profile")
                }
            })

    }

    return (
        <div className="my-con my-10 lg:my-16">
            <h1 className="lg:text-4xl font-bold text-center ">Update Your Profile </h1>
            <div className="lg:w-2/3 m-auto mt-10 border p-6">
                <form onSubmit={handleDollUpdate} className="grid  md:grid-cols-2 lg:gap-5">


                    <div>
                        <label className="text-base font-medium block mb-2"> Name</label>
                        <input type="text" name="name" id="price" className=" border  border-[#4acdd5] py-2 rounded pl-2 w-full" defaultValue={myInfo?.name} />
                    </div>
                    <div>
                        <label className="text-base font-medium block mb-2">Email</label>
                        <input type="email" name="userMail" id="userMail" className=" border  border-[#4acdd5] py-2 rounded pl-2 w-full" defaultValue={myInfo?.userMail} />
                    </div>
                    <div className="col-span-2">
                        <label className="text-base font-medium block mb-2"> Address</label>
                        <input type="address" name="address" id="address" className=" border  border-[#4acdd5] py-2 rounded pl-2 w-full" defaultValue={myInfo?.address} />
                    </div>
                    <div className="col-span-2">
                        <label className="text-base font-medium block mb-2"> University</label>
                        <input type="university" name="university" id="university" className=" border  border-[#4acdd5] py-2 rounded pl-2 w-full" defaultValue={myInfo?.university} />
                    </div>



                    <div className="">
                        <input type="submit" value="Submit" className=" text-xl font-semibold  py-2 px-4 border rounded-lg " />
                    </div>

                </form>
            </div>
        </div>
    );
};

export default UpdateProfile;