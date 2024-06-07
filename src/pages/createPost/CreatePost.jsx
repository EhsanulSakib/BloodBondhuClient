import React from 'react'
import Swal from 'sweetalert2'
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { BASE_URL } from '../../constVariables/constVariable';
import GraphMap from './GraphMap';

function CreatePost() {

    const { user, darkMode } = useContext(AuthContext)
    const [rating, setRating] = useState('')
    const navigate = useNavigate()

    const handleAddDonor = event => {
        event.preventDefault();

        const form = event.target

        const postcreated = new Date()
        const patientname = form.donorname.value
        const phonenumber = form.phone.value
        const email = user.email
        const bloodGroup = form.bloodGroup.value
        const gender = form.gender.value
        const validdate = form.validdate.value
        const address = form.address.value
        const hospital = form.hospitalname.value
        const emergency = form.emergency.value
        const bivag = form.bivag.value
        const zilla = form.zilla.value
        const area = form.area.value
        const donorname = "none"
        const details = form.details.value
        const comments = []
        const request = []
        const vara = form.vara.value
        const khabar = form.khabar.value




        const newPosts = {
            postcreated,
            patientname,
            phonenumber,
            email,
            bloodGroup,
            gender,
            validdate, // You might need to parse or format this date based on requirements
            address,
            hospital,
            emergency,
            bivag,
            zilla,
            area,
            donorname,
            details,
            comments,
            request,
            vara,
            khabar,
            // Include the current date if needed
        };

        fetch(`${BASE_URL}/newpost`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newPosts)
        }).then(res => res.json)
            .then(data => {
                console.log("Hello")


            })

        Swal.fire({
            title: 'অভিনন্দন',
            text: 'আপনার পোস্ট সফল হয়েছে!',
            icon: 'success',
            confirmButtonText: 'Ok'
        }).then(() => {
            navigate('/')
        })


    }



    return (
        <div className="w-11/12 md:w-5/6 m-auto my-4 md:my-8 lg:my-12 min-h-screen shadow-xl p-4 md:p-8 border rounded-lg border-dashed border-red-400">
            <h2 className="font-extrabold text-center text-2xl md:text-3xl mb-4 text-red-600">পোস্ট ফর্ম পূরণ</h2>

            <form onSubmit={handleAddDonor} className="w-11/12 m-auto flex flex-col gap-12 my-4 md:my-8 lg:my-12 rounded-lg">
                <div className='text-base lg:text-xl'>
                    <h2 className="mb-2 font-bold ">নাম:</h2>
                    <input required type="text" placeholder="নাম লিখুন (বাংলায় অথবা ইংরেজিতে)" className={`input rounded-md border-4 input-bordered w-full bg-inherit `} name="donorname" />
                </div>

                <div className='text-base lg:text-xl'>
                    <h2 className="mb-2 font-bold ">রোগীর মোবাইল নাম্বার (ইংরেজি):</h2>
                    <input required type="text" placeholder="মোবাইল নাম্বার লিখুন" className={`input rounded-md border-4 input-bordered w-full bg-inherit`} name="phone" />
                </div>

                <div className='text-base lg:text-xl'>
                    <h2 className="mb-2 font-bold ">হাসপাতাল:</h2>
                    <input required type="text" placeholder="মোবাইল নাম্বার লিখুন" className={`input  rounded-md border-4 input-bordered w-full bg-inherit`} name="hospitalname" />
                </div>

                <div className='text-base lg:text-xl'>
                    <h2 className="mb-2 font-bold">রক্তের গ্রুপ:</h2>
                    <select required className={`input rounded-md input-bordered ${darkMode ? ' bg-gray-800' : ' bg-slate-100'} w-full cursor-pointer border-4`} name="bloodGroup">
                        <option value="A+" className='text-xl'>A+</option>
                        <option value="A-" className='text-xl'>A-</option>
                        <option value="B+" className='text-xl'>B+</option>
                        <option value="B-" className='text-xl'>B-</option>
                        <option value="O+" className='text-xl'>O+</option>
                        <option value="O-" className='text-xl'>O-</option>
                        <option value="AB+" className='text-xl'>AB+</option>
                        <option value="AB-" className='text-xl'>AB-</option>
                    </select>
                </div>

                <div className='text-base lg:text-xl'>
                    <h2 className="mb-2 font-bold ">লিঙ্গ:</h2>

                    <div className='flex'>
                        <div className='flex gap-1 mr-3'>
                            <input type="radio" required name="gender" value="male" />
                            <p>পুরুষ</p>
                        </div>

                        <div className='flex gap-1'>
                            <input type="radio" required name="gender" value="female" />
                            <p>মহিলা</p>
                        </div>
                    </div>
                </div>

                <div className='text-base lg:text-xl'>
                    <h2 className="mb-2 font-bold ">জরুরি রক্তের প্রয়োজন:</h2>

                    <div className='flex'>
                        <div className='flex gap-1 mr-3'>
                            <input type="radio" required name="emergency" value="yes" />
                            <p>হ্যা</p>
                        </div>

                        <div className='flex gap-1'>
                            <input type="radio" required name="emergency" value="no" />
                            <p>না</p>
                        </div>
                    </div>
                </div>

                <div className='text-base lg:text-xl'>
                    <h2 className="mb-2 font-bold ">রক্তদাতা কে খাবার সরবরাহ হবে কিনা:</h2>

                    <div className='flex'>
                        <div className='flex gap-1 mr-3'>
                            <input type="radio" required name="khabar" value="yes" />
                            <p>হ্যা</p>
                        </div>

                        <div className='flex gap-1'>
                            <input type="radio" required name="khabar" value="no" />
                            <p>না</p>
                        </div>
                    </div>
                </div>

                <div className='text-base lg:text-xl'>
                    <h2 className="mb-2 font-bold ">রক্তদাতার যাতায়াত ভাড়া প্রদান করা হবে কিনা:</h2>

                    <div className='flex'>
                        <div className='flex gap-1 mr-3'>
                            <input type="radio" required name="vara" value="yes" />
                            <p>হ্যা</p>
                        </div>

                        <div className='flex gap-1'>
                            <input type="radio" required name="vara" value="no" />
                            <p>না</p>
                        </div>
                    </div>
                </div>





                <div className='text-base lg:text-xl'>
                    <h2 className="mb-2 font-bold"> রক্তদানের প্রযোজ্য তারিখ(এই সময়ের মধ্যে  রক্ত প্রয়োজন) :</h2>
                    <input required type="date" name="validdate" className='w-full p-2 rounded-md border-4 bg-transparent' />
                </div>




                <div className='text-base lg:text-xl'>
                    <h2 className="mb-2 font-bold text-lg">রোগীর বর্তমান ঠিকানা:</h2>
                    <input required type="text" placeholder="বর্তমান ঠিকানা দিন" className={`input rounded-none input-bordered w-full border-4 bg-inherit`} name="address" />
                </div>

                <div className='text-base lg:text-xl'>
                    <h2 className="mb-2 font-bold text-lg">রোগীর বিস্তারিত বর্ণনা:</h2>
                    <input required type="text" placeholder="রোগীর বিস্তারিত বর্ণনা" className={`input rounded-none input-bordered w-full border-4 bg-inherit`} name="details" />
                </div>



                <div className='text-base lg:text-xl'>
                    <h2 className="mb-2 font-bold">বিভাগ:</h2>
                    <select required className={`input rounded-md input-bordered ${darkMode ? ' bg-gray-800' : ' bg-slate-100'} w-full cursor-pointer border-4`} name="bivag">
                        <option value="dhaka" className='text-xl'>ঢাকা</option>

                    </select>
                </div>

                <div className='text-base lg:text-xl'>
                    <h2 className="mb-2 font-bold">জেলা:</h2>
                    <select required className={`input rounded-md input-bordered ${darkMode ? ' bg-gray-800' : ' bg-slate-100'} w-full cursor-pointer border-4`} name="zilla">
                        <option value="dhaka" className='text-xl'>ঢাকা</option>

                    </select>
                </div>
                <div className='text-base lg:text-xl'>
                    <h2 className="mb-2 font-bold">রোগীর বর্তমান এলাকা:</h2>
                    <select required className={`input rounded-md input-bordered ${darkMode ? ' bg-gray-800' : ' bg-slate-100'} w-full cursor-pointer border-4`} name="area">
                        <option value="gulshan" className='text-xl'>Gulshan: গুলশান</option>
                        <option value="banani" className='text-xl'>Banani: বনানী</option>
                        <option value="uttara" className='text-xl'>Uttara: উত্তরা</option>
                        <option value="mirpur" className='text-xl'>Mirpur: মিরপুর</option>
                        <option value="badda" className='text-xl'>Badda: বাড্ডা</option>
                        <option value="rampura" className='text-xl'>Rampura: রামপুরা</option>
                        <option value="malibagh" className='text-xl'>Malibagh: মালিবাগ</option>
                        <option value="khilgaon" className='text-xl'>Khilgaon: খিলগাঁও</option>
                        <option value="farmgate" className='text-xl'>Farmgate: ফার্মগেট</option>
                        <option value="motijheel" className='text-xl'>Motijheel: মতিঝিল</option>
                        <option value="dhanmondi" className='text-xl'>Dhanmondi: ধানমন্ডি</option>
                        <option value="moghbazar" className='text-xl'>Moghbazar: মগবাজার</option>
                        <option value="old_dhaka" className='text-xl'>Old Dhaka (Puran Dhaka): পুরান ঢাকা</option>
                        <option value="tejgaon" className='text-xl'>Tejgaon: তেজগাঁও</option>
                        <option value="demra" className='text-xl'>Demra: ডেমরা</option>
                        <option value="mohammadpur" className='text-xl'>Mohammadpur: মোহাম্মদপুর</option>
                        <option value="shahbagh" className='text-xl'>Shahbagh: শাহবাগ</option>

                    </select>
                </div>

                <input type="submit" value="Post করুন" className="btn-lg rounded-md text-lg bg-red-400 border-none cursor-pointer font-bold text-white col-span-2 py-2 w-full" />
            </form>
        </div>
    );
}

export default CreatePost