import Lottie from "lottie-react";
import error from "../../../public/error.json";
import { Link } from "react-router-dom";
import { IoCaretBackSharp } from "react-icons/io5";

const ErrorPage = () => {

    return (
        <div className="flex flex-col items-center min-h-screen bg-white">
            <Lottie animationData={error} className="h-[32rem]" />
            <button className="btn btn-active w-48"><Link to='/' className="flex gap-1 items-center"><IoCaretBackSharp className="text-lg" /> <h2>Go to Homepage</h2></Link></button>
        </div>
    );
};

export default ErrorPage;