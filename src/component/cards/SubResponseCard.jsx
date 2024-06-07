import React from 'react'
import { Link, Route } from 'react-router-dom';


import { useContext, useState, useEffect } from "react";

function SubResponseCard({ requ, postid }) {

  const donormail = requ.email;
  console.log(requ.email)

  return (
    <div >
      {donormail === null ? "" :
        <div className='bg-red-100 p-4 mt-4 rounded-md'>
          <h2 className='font-bold text-xl lg:text-2xl xl:text-3xl'>{requ.donorName}</h2>
          <h2>মোবাইল: {requ.phone}</h2>
          <h2>অবস্থান: {requ.area},{requ.bivag}</h2>


          <div className='mt-4'>
            <button className="btn bg-red-600 hover:bg-red-400 text-white border-none">বাতিল করুন</button>
            <button className="ml-4 btn bg-red-600 hover:bg-red-400 text-white border-none"><Link to={`/receiveblood/${postid}/${donormail}`}>গ্রহণ করুন</Link></button> </div>
        </div>

      }
    </div>
  )
}

export default SubResponseCard
