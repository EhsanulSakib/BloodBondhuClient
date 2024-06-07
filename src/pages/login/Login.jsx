import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import google from '../../../public/google.png'
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../provider/AuthProvider";

const Login = () => {
    const { signIn, handleGoogleSignIn, handleGitHubSignIn } = useContext(AuthContext)
    const { register, handleSubmit } = useForm()
    const notify = () => toast.success("Successfully Logged In");
    const notifyError = errorName => toast.error(errorName);
    const location = useLocation()
    const navigate = useNavigate()
    const [show, setShow] = useState(false)

    const onSubmit = (data) => {
        const { email, password } = data;

        signIn(email, password)
            .then(result => {
                navigate(location?.state ? location.state : '/')
                notify()
            }
            )
            .catch(error => {
                notifyError(error.message.split('(').pop().split(')')[0].split('/')[1])
            })

    }

    const handleGoogleLogin = () => {
        handleGoogleSignIn()
            .then(() => {
                navigate(location?.state ? location.state : '/')
                notify()
            })
    }

    return (
        <div className="min-h-screen flex items-center justify-center my-12 text-red-400">
            <Helmet>
                <title>ব্লাড বন্ধু | Login</title>
            </Helmet>
            <div className="flex gap-4 rounded-xl flex-col items-center justify-center w-11/12 md:w-1/2 py-4 md:py-8 lg:py-12 shadow-xl">
                <h2 className="text-2xl font-semibold ">লগইন</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="w-11/12 md:w-3/4">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg text-red-400">ইমেইল</span>
                        </label>
                        <input type="email" name="email" placeholder="ইমেইল দিন" className="input input-bordered bg-inherit border border-red-400" {...register("email")} />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg text-red-400">Password</span>
                        </label>
                        <div className="w-full relative">
                            <input type={show ? "text" : "password"} name="password" placeholder="পাসওয়ার্ড দিন" className="w-full input bg-inherit input-bordered border border-red-400" {...register("password")} />
                            <span className="absolute right-3 top-3 text-2xl cursor-pointer" onClick={() => setShow(!show)}>
                                {
                                    show ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                }
                            </span>
                        </div>
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover text-base text-red-400">পাসওয়ার্ড ভুলে গেছেন?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-cyan-400 hover:bg-cyan-500 border-none text-white text-lg font-bold">লগইন করুন</button>
                    </div>
                </form>
                <div className="flex items-center justify-center p-2 w-11/12 md:w-3/4 rounded-lg bg-cyan-400 hover:bg-cyan-500 gap-4 my-2 border text-white font-bold cursor-pointer" onClick={handleGoogleLogin} >
                    <img src={google} alt="google logo" className="w-8" />
                    <h2 className="lg:text-xl">গুগলের সাহায্যে লগইন করুন</h2>
                </div>
                <hr className="w-11/12 border border-stone-400 border-dashed" />
                <div>
                    <p className="lg:text-xl">কোনো একাউন্ট নেই? <Link to='/register' className="no-underline text-cyan-400 hover:text-cyan-500 font-bold">রেজিস্টার করুন</Link></p>
                </div>
            </div>
        </div>
    )
};

export default Login;