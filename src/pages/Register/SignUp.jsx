import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-hot-toast";
import GoogleSignIn from "./GoogleSignIn";


const SignUp = () => {
    const { signUp, updateProfileInfo, logOut } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const address = form.address.value;
        const university = form.university.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        signUp(email, password)
            .then((result) => {
                const signUpUser = result.user;
                updateProfileInfo(name, photo)
                    .then(() => {
                        if (signUpUser.email) {
                            const userInfo = {
                                email: result.user.email,
                                name: result.user?.displayName,
                                photo: result.user?.photoURL,
                                address,
                                university,
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
                                        logOut();
                                        navigate("/login")
                                    }
                                })
                                .catch(error => console.log(error.message))
                        }

                    })

            })
            .catch(error => {
                console.log(error)
            });
    };
    return (
        <div className="my-con ">
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse ">
                    <div className="text-center lg:text-left">
                        <img src="https://i.ibb.co/sJpvRY2/login.png" alt="admission" className="hidden lg:block" />
                    </div>
                    <div className="card flex-shrink-0 w-full  max-w-sm  shadow-2xl bg-base-100">

                        <form onSubmit={handleSignUp} className="card-body ">
                            <h1 className="text-5xl font-bold">Sign Up</h1>
                           <div >
                           <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Name</span>
                                </label>
                                <input type="text" name="name" placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">University</span>
                                </label>
                                <input type="text" name="university" placeholder="Current Institute" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Address</span>
                                </label>
                                <input type="text" name="address" placeholder="Your Address" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Photo</span>
                                </label>
                                <input type="url" name="photo" placeholder="Photo URL" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" />

                            </div>
                           </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary" type="submit">SignUp</button>
                            </div>
                            <GoogleSignIn></GoogleSignIn>
                        </form>
                        <div className="mb-5 pl-10 ">
                            <p>Already have an account? <Link to="/logIn" className="text-green-500 underline">Login</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;