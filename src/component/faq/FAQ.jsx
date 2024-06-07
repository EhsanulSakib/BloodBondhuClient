import React from 'react';
import Lottie from "lottie-react";
import faq from "../../../public/faq.json";

const FAQ = () => {
    return (
        <div className='flex flex-col md:flex-row items-center gap-12 mb-4 md:mb-8 lg:mb-12 w-11/12 m-auto'>
            <div className='w-full md:w-2/5'>
                <Lottie animationData={faq} className="md:h-[28rem]" />
            </div>
            <div className='flex-1 mx-2 md:mb-4'>
                <div className="join join-vertical w-full">
                    <div className="collapse collapse-arrow join-item border-b border-base-100">
                        <input type="radio" name="my-accordion-4" defaultChecked />
                        <div className="collapse-title font-medium">
                            "ব্লাড বন্ধু" কি ধরনের সেবা প্রদান করে?
                        </div>
                        <div className="collapse-content text-xs md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
                            <p>"ব্লাড বন্ধু" একটি বিনামূল্যে রক্তদান এবং রক্ত সংগ্রহের প্ল্যাটফর্ম। এখানে আপনি রক্তদান করতে পারেন এবং জরুরি প্রয়োজনে রক্ত পেতে পারেন।</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border-b border-base-100">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title  font-medium">
                            "ব্লাড বন্ধু" ব্যবহার করে কিভাবে রক্তদাতা খুঁজে পাবো?
                        </div>
                        <div className="collapse-content text-xs md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
                            <p>"ব্লাড বন্ধু" ওয়েবসাইটে রেজিস্টার করার পর আপনি আপনার প্রয়োজনীয় রক্তের গ্রুপ অনুযায়ী রক্তদাতা খুঁজে পাবেন। সরাসরি রক্তদাতার সাথে যোগাযোগ করে রক্ত সংগ্রহ করতে পারবেন।</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border-b border-base-100">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title font-medium">
                            কিভাবে "ব্লাড বন্ধু"-তে রক্তদান করতে পারবো?
                        </div>
                        <div className="collapse-content text-xs md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
                            <p>রক্তদাতা হিসেবে নিবন্ধিত হতে, "ব্লাড বন্ধু" ওয়েবসাইটে গিয়ে আপনার ব্যক্তিগত তথ্য এবং রক্তের গ্রুপ প্রদান করে রেজিস্টার করুন। রেজিস্ট্রেশনের পর, যখন কেউ আপনার রক্তের গ্রুপের রক্তের প্রয়োজন হবে, তারা আপনার সাথে যোগাযোগ করবে।</p>
                        </div>
                    </div>

                    <div className="collapse collapse-arrow join-item border-b border-base-100">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title font-medium">
                            "ব্লাড বন্ধু"-তে রক্ত পাওয়া কি সত্যিই বিনামূল্যে?
                        </div>
                        <div className="collapse-content">
                            <p>হ্যাঁ, "ব্লাড বন্ধু" মাধ্যমে রক্তদান এবং রক্ত সংগ্রহ সম্পূর্ণ বিনামূল্যে। এটি একটি স্বেচ্ছাসেবী সেবা যেখানে রক্তদাতারা নিঃস্বার্থভাবে রক্তদান করেন।</p>
                        </div>
                    </div>

                    <div className="collapse collapse-arrow join-item border-b border-base-100">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title font-medium">
                            "ব্লাড বন্ধু" কি ভাবে রক্তদাতা এবং রক্তগ্রহীতাদের নিরাপত্তা নিশ্চিত করে?
                        </div>
                        <div className="collapse-content text-xs md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
                            <p> "ব্লাড বন্ধু" রক্তদাতা এবং রক্তগ্রহীতাদের সকল তথ্য নিরাপদে সংরক্ষণ করে এবং রক্তদানের আগে প্রয়োজনীয় স্বাস্থ্য পরীক্ষা সম্পন্ন করার পরামর্শ দেয়। এছাড়া, প্রত্যেক রক্তদানকারীকে নিয়মিত স্বাস্থ্য পরীক্ষা করার উৎসাহিত করা হয়।</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;