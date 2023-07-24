
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useContext, useState } from "react";
import  { AuthContext } from "../../Provider/AuthProvider";


const GoogleSignIn = () => {
    const {googleLogIn, updateProfileInfo} = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const [error, setError] = useState("")

    const from = location.state?.from?.pathname || "/"; 

    const handleGoogleSignIn = () =>{
        setError("")
        googleLogIn()
        .then(result =>{
            const loggedUser = result.user;
            updateProfileInfo(result.user?.displayName, result.user?.photoURL)
                    .then(() => {
                        if (loggedUser.email) {
                            const userInfo = {
                                email: result.user.email,
                                name: result.user?.displayName,
                                photo: result.user?.photoURL,
                                address: "",
                                university: "",
                                userMail: result.user.email
                            }
                            fetch("https://collegeducate-server.vercel.app/users", {
                                method: "POST",
                                headers: {
                                    "content-type": "application/json"
                                },
                                body: JSON.stringify(userInfo)
                            })
                                .then(res => res.json())
                                .then(data => {
                                    if (data.insertedId) {
                                        toast.success("User information Saved");
                                       
                                         navigate(from, { replace: true });
                                    }
                                })
                                .catch(error => console.log(error.message))
                        }

                    })
           
        })
        .catch( error => {
            return setError(error.message)
        })
    }
    return (
        <div>
            <div className="lg:mt-3">
                        <h3 className="text-red-500 font-semibold">{error}</h3>
                    </div>
            <div className=" my-2">
            <button onClick={handleGoogleSignIn} className="border border-cyan-500 rounded py-2 px-4 font-semibold text-cyan-500">
                <img src="https://i.ibb.co/xLZyxZf/Google-Icons-09-512.webp" alt="" className="w-6 h-6 inline-block mr-1" />
               Sign in Google</button>
        </div>
        </div>
    );
};

export default GoogleSignIn;