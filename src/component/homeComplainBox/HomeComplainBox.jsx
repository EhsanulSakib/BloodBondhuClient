import { Link } from "react-router-dom";
import complain from "../../../public/complain.json"
import Lottie from "lottie-react";
const HomeComplainBox = () => {
    return (
        <div className='m-auto flex flex-col md:flex-row mb-4 md:mb-8 lg:mb-12 w-11/12 gap-12 items-center'>
            <div className='w-full md:w-2/5'>
                <Lottie animationData={complain} className="md:h-[20rem]" />
            </div>
            <div className="p-4">
                <div className="px-4 md:px-8 w-full">
                    <h1 className="text-2xl xl:text-4xl text-red-700 2xl:text-5xl font-bold">আপনার কী কোনো অভিযোগ অথবা প্রশ্ন রয়েছে?</h1>
                    <p className="py-6 text-xs lg:text-base xl:text-lg 2xl:text-xl">
                        <ul className="text-left text-sm lg:text-base xl:text-lg 2xl:text-xl">
                            <li> রক্তদাতার সাথে যোগাযোগ করতে সমস্যা হলে।</li>
                            <li>- রক্তদাতা রক্ত দান করতে অস্বীকৃতি জানালে।</li>
                            <li>- রক্তদান বা রক্ত গ্রহণের সময় স্বাস্থ্য সম্পর্কিত কোন সমস্যা হলে।</li>
                            <li>- রক্তদাতার প্রদান করা তথ্য ভুল হলে।</li>
                            <li>- ওয়েবসাইট বা অ্যাপে প্রযুক্তিগত সমস্যা হলে।</li>
                            <li>- ব্যক্তিগত তথ্য সুরক্ষিত না থাকলে।</li>
                        </ul>
                    </p>
                    <Link to='/complain'><button className="btn btn-primary bg-red-400 hover:bg-red-200 rounded-sm font-extrabold border-none">আমাদের জানান</button></Link>
                </div>
            </div>
        </div>
    );
};

export default HomeComplainBox;