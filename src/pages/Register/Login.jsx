import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import GoogleSignIn from "./GoogleSignIn";


const Login = () => {
    const { logIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        logIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                if (loggedUser?.email) {
                    navigate(from, { replace: true });
                }
            })
            .catch(error => {
                console.log(error)
            });
    };

    return (
        <div className="my-con">
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse items-center">
                    <div className="text-center ">
                        <img src="https://i.ibb.co/sJpvRY2/login.png" alt="admission" className="hidden lg:block" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h1 className="text-5xl font-bold">Login now!</h1>
                            <form onSubmit={handleLogin}>
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
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary" type="submit">Login</button>
                                </div>
                            </form>
                            <GoogleSignIn></GoogleSignIn>
                        </div>
                        <div className="mb-5 pl-10 ">
                            <p>Do not have an account? <Link to="/signUp" className="text-green-500 underline">SignUp</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};



export default Login;