import React from 'react';
import { Link } from 'react-router-dom';
import image from "../../../public/donate-blood.png"

const HomeRegistration = () => {
    return (
        <div className='mb-4 md:mb-8 lg:mb-12 rounded-md w-full md:w-11/12 m-auto'>
            <div className="flex py-4 flex-col md:flex-row gap-12 items-center">
                <div className='w-full md:w-5/6'>
                    <img src={image} alt="" className='' />
                </div>
                <div className="px-4 md:px-8 w-full">
                    <h1 className="text-2xl xl:text-4xl text-red-700 2xl:text-5xl font-bold">রক্তদানে আগ্রহী হলে রেজিস্ট্রেশন করুন</h1>
                    <p className="py-6 text-sm lg:text-base xl:text-xl 2xl:text-2xl">ব্লাডবন্ধু কোন একক সংগঠন নয়, বরং রক্তদাতাদের একটি প্লাটফর্ম। সকল ব্যক্তির, সংগঠনের সুবিধার জন্যই। যাঁরা রক্তদেন তাঁদেরকে এবং রক্তদান সম্পর্কিত বিভিন্ন সংগঠনগুলোকে এক প্লাটফর্মে নিয়ে এসে রক্ত দেওয়া-পাওয়ার কাজটা সহজ করাই এর উদ্দেশ্য। আপনিও রক্তদাতা হলে ব্লাডবন্ধু website এ রেজিস্ট্রেশন করুন।</p>
                    <Link to='/register'><button className="btn btn-primary bg-red-400 hover:bg-red-200 rounded-sm font-extrabold border-none">রেজিস্টার করুন</button></Link>
                </div>
            </div>
        </div>
    );
};

export default HomeRegistration;