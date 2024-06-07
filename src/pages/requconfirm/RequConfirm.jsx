import React from 'react'
import { Link, NavLink, useNavigate } from "react-router-dom";
import { RiMenu2Line } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { useContext, useState,useRef,useEffect } from "react";

import { toast } from 'react-toastify';
import { useParams } from "react-router-dom"

import { MdDarkMode, MdLightMode, MdOutlineLogout } from "react-icons/md";
import { AuthContext } from "../../provider/AuthProvider";

import { BASE_URL } from '../../constVariables/constVariable';

function RequConfirm() {

    const [open, setOpen] = useState(false)
    const { user, logOut, darkMode, setDarkMode } = useContext(AuthContext)
    const notify = () => toast.error("User Signed Out!");
    const navigate = useNavigate()
    const [userdata, Setuserdata] = useState({});

    const params=useParams();

    useEffect(()=>{


        fetch(`${BASE_URL}/getdonor/${params.email}`)
        .then(res => res.json())
        .then(data => {
          Setuserdata(data)
        })
        

    },[])

    navigate(`/requestbox/${user.email}/${userdata.area}`)


    


    // useEffect(() => {

    
    //   fetch(`${BASE_URL}/getdonor/${user.email}`)
    //   .then(res => res.json())
    //   .then(data => {
    //     Setuserdata(data)
    //     Setlud(true);
    //   })


    // }, []);
  return (
    <div className='min-h-screen'> <h1 class="text-gray-500 font-bold text-2xl tracking-wide">কোনো জরুরি রিকোয়েস্ট নেই</h1>
    
    <h1>{userdata.area}</h1>
    </div>
  )
}

export default RequConfirm