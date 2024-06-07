import React from "react";
import { Link, Route } from "react-router-dom";
import Swal from 'sweetalert2'

import { useNavigate } from 'react-router-dom';

import { useContext, useState, useEffect } from "react";
import { BASE_URL } from "../../constVariables/constVariable";
import { AuthContext } from "../../provider/AuthProvider";


function Postcards({ postdata, donorlist }) {
  const { user, logOut, darkMode, setDarkMode } = useContext(AuthContext);
  const [curent, Setcurrent] = useState({})
  const [currentuser, Setcurrentuser] = useState({});
  const [lud, setLud] = useState(true);
  const [toggle, setToggle] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {


    fetch(`${BASE_URL}/getdonor/${user.email}`)
      .then(res => res.json())
      .then(data => {
        Setcurrent(data)

        setLud(false)
      })
  }, [])

  if (!lud) {
    console.log(curent);
  }

  const handlecontact=()=>{
        navigate(`/mailbox/${postdata.email}`)
  }



  const handleresponse = () => {
    setToggle(true)
    console.log(curent.email);

    const postId = postdata._id;

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
          title: "রেসপসনে সফল হয়েছে",
          text: "আপনাকে ধন্যবাদ",
          icon: "success"
        });
      }
    }).catch(error => {
      console.error('Error:', error);
    });




  }
  return (
    //  <div className="bg-lime-300 text-sm border-2 p-3 m-8 border-3 border-black shadow-xl">
    //   <p>Post Created: {postdata.postcreated}</p>
    //   <p>Patient Name: {postdata.patientname}</p>
    //   <p>Phone Number: {postdata.phonenumber}</p>
    //   <p>Email: {postdata.email}</p>
    //   <p>Blood Group: {postdata.bloodGroup}</p>
    //   <p>Gender: {postdata.gender}</p>
    //   <p>Valid Date: {postdata.validdate}</p>
    //   <p>Address: {postdata.address}</p>
    //   <p>Hospital: {postdata.hospital}</p>
    //   <p>Emergency: {postdata.emergency}</p>
    //   <p>Bivag: {postdata.bivag}</p>
    //   <p>Zilla: {postdata.zilla}</p>
    //   <p>Area: {postdata.area}</p>
    //   <p>Donor Name: {postdata.donorname}</p>
    //   <p>Details: {postdata.details}</p>
    //   <p>{user.email}</p> 

    < div className="my-8 shadow-sm m-auto rounded-md p-4 lg:p-6 w-11/12 border border-red-400" >
      {
        postdata.emergency ? <h2 className="font-bold text-red-700  text-base md:text-lg 2xl:text-xl">#জরুরি</h2> :
          ""
      }
      <h2 h2 className="text-xl lg:text-2xl xl:text-4xl font-bold" > {postdata.details}</h2 >
      <div className="my-1 flex gap-2">
        <h2>{postdata.postcreated.split('T')[0]}</h2>
        <h2>({postdata.postcreated.split('T')[1].split(".")[0]})</h2>
      </div>
      <h2 className="text-lg lg:text-xl xl:text-2xl text-red-600">রক্তর গ্রুপ: {postdata.bloodGroup}</h2>
      <h2 className="mt-2 text-base md:text-lg 2xl:text-xl">রোগীর নাম: {postdata.patientname}</h2>

      <div className="my-4 flex flex-col md:flex-row gap-1 md:gap-8  text-base md:text-lg 2xl:text-xl">
        <h2>রোগীর অবস্থান: {postdata.hospital}, {postdata.address}, {postdata.bivag}</h2>

        <h2>মোবাইল নম্বর: {postdata.phonenumber}</h2>
      </div>

      <div>
        <h2 className=" text-base md:text-lg 2xl:text-xl"><span className="font-extrabold"></span>বি.দ্র. : {postdata.khabar && postdata.vara ? "রক্তদাতার যাবতীয় খরচ বহন করা হবে |" : "রক্তদাতার যাবতীয় খরচ বহন করা হবে না |"}</h2>
      </div>

      {
        user.email === postdata.email ? (
          ""
        ) : (
          <button onClick={handlecontact} className="btn bg-red-600 hover:bg-red-400 text-white border-none">যোগাযোগ</button>
        )
      }
      {
        user.email === postdata.email ? (
          ""
        ) : (
          <button onClick={handleresponse} className="btn bg-red-600 hover:bg-red-400 text-white border-none p-2 gap-1 m-2">রেসপন্স</button>
        )
      }

      <div>

      
      </div>


    </div >
  );
}

export default Postcards;
