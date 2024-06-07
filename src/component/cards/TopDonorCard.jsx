import React from 'react'
import { Link, Route } from "react-router-dom";

import { useContext, useState, useEffect } from "react";
import { BASE_URL } from "../../constVariables/constVariable";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from 'sweetalert2'
function TopDonorCard({ data }) {
  const { user, logOut, darkMode, setDarkMode } = useContext(AuthContext);



  return (
    <div>


      <div class="flex justify-between gap-6 m-10 mb-10">

        <div class="container bg-white shadow-2xl rounded-2xl p-5">
          <h1 class="font-bold text-black-500">{data.donorName}</h1>
          <h1 class="font-bold text-black-500">{data.phone}</h1>
          <h1 class="font-bold text-black-500">{data.email}</h1>
          <h1 class="font-bold text-black-500">{data.donated}</h1>
          <h1 class="font-bold text-black-500">{data.bloodGroup}</h1>
          <h1 class="font-bold text-black-500">{data.area}</h1>
          <h1 class="font-bold text-black-500">{data.lastdonate}</h1>

          {/* {data.email === mail? "":
             <a href="#" class="rounded-lg py-2 px-4 text-center text-white bg-red-400 hover:bg-yellow-500"><Link to={`/mailbox/${data.email}`}>Contact</Link></a> 
            }
               */}


        </div>

      </div>




    </div>

  )
}

export default TopDonorCard