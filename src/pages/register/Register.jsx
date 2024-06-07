import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { updateProfile } from "firebase/auth";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";
import { BASE_URL } from "../../constVariables/constVariable";

const Register = () => {
    const { setUser, createUser } = useContext(AuthContext);
    const { register, handleSubmit } = useForm();
    const [show, setShow] = useState(false);
    const navigate = useNavigate()
    const notifyError = errorName => toast.error(errorName);
    const notifySuccess = () => toast.success('User Registered Successfully');



    const onSubmit = (data) => {
        const { name, photo, email, password } = data;

        if (password.length < 6) {
            notifyError("Password should be at least 6 characters or longer.")
            return
        }

        else if (!/[A-Z]/.test(password)) {
            notifyError("Password should Contain At least a Uppercase Letter")
            return
        }

        else if (!/[a-z]/.test(password)) {
            notifyError("Password should Contain At least a Lowercase Letter")
            return
        }





        createUser(email, password)
            .then(result => {
                updateProfile(result.user, {
                    displayName: name, photoURL: photo
                })
                fetch(`${BASE_URL}/user`, {
                    method: 'post',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify({ name, email, photo })
                })
                    .then(result => {
                        Swal.fire({
                            title: 'Success!',
                            text: 'User Added Successfully!',
                            icon: 'success',
                            confirmButtonText: 'Ok'
                        })
                        navigate('/')
                    })
                    .catch()
            })
            .catch(error => notifyError(error.message.split('(').pop().split(')')[0].split('/')[1]))
    }


    return (
        <div className={`min-h-screen flex items-center justify-center text-red-400 my-4 md:my-8 lg:my-12`}>
            <Helmet>
                <title>ব্লাড বন্ধু | Register</title>
            </Helmet>
            <div className="mb-8 flex gap-4 rounded-xl flex-col items-center justify-center w-11/12 md:w-1/2 py-8 lg:py-12 shadow-xl ">
                <h2 className="text-2xl">রেজিস্টার</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="w-11/12 md:w-3/4">
                    <div className="form-control mt-4">
                        <label className="label">
                            <span className="label-text text-xl text-red-400">আপনার নাম</span>
                        </label>
                        <input required type="text" name="name" placeholder="নাম লিখুন (বাংলা অথবা ইংরেজিতে)" className="input input-bordered bg-inherit border border-red-400" {...register("name")} />
                    </div>
                    <div className="form-control mt-4">
                        <label className="label">
                            <span className="label-text text-xl text-red-400">আপনার ছবির লিংক</span>
                        </label>
                        <input required type="text" name="photo" placeholder="ছবির লিংক দিন" className="input input-bordered bg-inherit border border-red-400" {...register("photo")} />
                    </div>
                    <div className="form-control mt-4">
                        <label className="label">
                            <span className="label-text text-xl text-red-400">ইমেইল</span>
                        </label>
                        <input required type="email" name="email" placeholder="ইমেইল দিন" className="input input-bordered bg-inherit border border-red-400" {...register("email")} />
                    </div>
                    <div required className="form-control mt-4">
                        <label className="label">
                            <span className="label-text text-xl text-red-400">পাসওয়ার্ড</span>
                        </label>
                        <div className="w-full relative">
                            <input type={show ? "text" : "password"} name="password" placeholder="পাসওয়ার্ড দিন" className="w-full input input-bordered bg-inherit border border-red-400" {...register("password")} />
                            <span className="absolute right-3 top-3 text-2xl cursor-pointer" onClick={() => setShow(!show)}>
                                {
                                    show ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                }
                            </span>
                        </div>
                        <label className="label">
                            <div className="flex gap-2">
                                <input type="checkbox" required name="terms" id="terms" className="text-lg" />
                                <p className="xl:text-xl">সকল <Link className="font-bold no-underline text-red-600"> শর্তবলিতে</Link> আমি রাজি</p>
                            </div>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-cyan-400 hover:bg-cyan-500 text-white text-lg font-bold border-none shadow-sm">রেজিস্টার</button>
                    </div>
                </form>
                <div>
                    <p className="xl:text-xl">ইতিমধ্যে কোন অ্যাকাউন্ট আছে? <Link to='/login' className="no-underline text-cyan-400 hover:text-cyan-600 font-bold">লগইন করুন</Link></p>
                </div>
            </div>
        </div >
    );
};

export default Register;