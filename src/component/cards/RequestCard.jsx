import React from 'react'
import { Link, Route } from "react-router-dom";

import { useContext, useState, useEffect } from "react";
import { BASE_URL } from "../../constVariables/constVariable";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from 'sweetalert2'
function RequestCard({ data }) {

  const { user, logOut, darkMode, setDarkMode } = useContext(AuthContext);
  const [curent, Setcurrent] = useState({})
  const [lud, setLud] = useState(true);
  const [toggle, setToggle] = useState(true)

  useEffect(() => {


    fetch(`${BASE_URL}/getdonor/${user.email}`)
      .then(res => res.json())
      .then(data => {
        Setcurrent(data)

        setLud(false)
      })
  }, [])



  const handleresponse = () => {

    // setLud(true);

    //  for(let i=0;i<donorlist.length;i++){
    //     if(donorlist[i].email === user.email){
    //        Setcurrent(donorlist[i]);
    //     }
    //  }
    //  setLud(false);
    console.log(curent.email);

    const postId = data._id;

    const newUpdate = { postId, curent }

    fetch(`${BASE_URL}/addresponse`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newUpdate)
    }).then(response => {
      if (response) {
        Swal.fire({
          title: "রেসপন্স সফল হয়েছে",
          text: "আপনাকে ধন্যবাদ",
          icon: "success"
        });
      }
    }).catch(error => {
      console.error('Error:', error);
    });
    setToggle(false);
  }




  return (
    <div>
      {data.email === user.email ? "" :
        <div class="flex justify-between gap-6 m-10 mb-10">

          <article class="w-11/12 m-auto bg-white shadow-sm rounded-2xl p-8 ">
            {
              data.emergency ? <h2 className="font-bold text-red-700 mb-4">#জরুরি</h2> :
                ""
            }
            <h2 h2 className="text-xl lg:text-2xl xl:text-4xl font-bold" > {data.details}</h2 >
            <div className="my-1 flex gap-2">
              <h2>{data.postcreated.split('T')[0]}</h2>
              <h2>({data.postcreated.split('T')[1].split(".")[0]})</h2>
            </div>
            <h2 className="text-lg lg:text-xl xl:text-2xl text-red-600">রক্তর গ্রুপ: {data.bloodGroup}</h2>
            <h2 className="mt-2 text-base md:text-lg 2xl:text-xl">রোগীর নাম: {data.patientname}</h2>

            <div className="my-4 flex flex-col md:flex-row gap-1 md:gap-8  text-base md:text-lg 2xl:text-xl">
              <h2>রোগীর অবস্থান: {data.hospital}, {data.address}, {data.bivag}</h2>

              <h2>মোবাইল নম্বর: {data.phonenumber}</h2>
            </div>

            <div>
              <h2 className=' text-base md:text-lg 2xl:text-xl'><span className="font-extrabold "></span>বি.দ্র. : {data.khabar && data.vara ? "রক্তদাতার যাবতীয় খরচ বহন করা হবে |" : "রক্তদাতার যাবতীয় খরচ বহন করা হবে না |"}</h2>
            </div>
            <div className='flex mt-6'>
              <button class="rounded-lg py-2 px-4 text-center text-white bg-red-400 hover:bg-yellow-500"><Link to={`/mailbox/${data.email}`}>যোগাযোগ</Link></button>

              {toggle ? <button onClick={handleresponse} className="rounded-lg ml-2 py-2 px-4 text-center text-white bg-red-400 hover:bg-yellow-500">রেসপন্স</button> : ""}
            </div>
          </article>

        </div>}
    </div>
  )
}

export default RequestCard