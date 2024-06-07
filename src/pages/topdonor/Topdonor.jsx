import React from "react";
import { Link, Route } from "react-router-dom";
import Swal from 'sweetalert2'


import { useContext, useState, useEffect } from "react";
import { BASE_URL } from "../../constVariables/constVariable";
import { AuthContext } from "../../provider/AuthProvider";
import TopDonorCard from "../../component/cards/TopDonorCard";

function Topdonor() {
  const [donor, setDonor] = useState([]);
  const [lud, Setlud] = useState(false);
  const [lud2, Setlud2] = useState(false);
  const [sortdonor, Setsortdonor] = useState([])



  useEffect(() => {
    // fetch(`${BASE_URL}/topdonor`)
    // .then(res => res.json())
    // .then(data => {setDonor(data)
    //  Setlud(true);

    //  fetch(`${BASE_URL}/updatedonation`, {
    //       method: 'PUT',
    //       headers: {
    //           'content-type': 'application/json'
    //       },
    //       body: JSON.stringify(donor)
    //   })
    // }
    // )

    // if(lud){
    //   console.log(69)
    //   fetch(`${BASE_URL}/updatedonation`, {
    //     method: 'PUT',
    //     headers: {
    //         'content-type': 'application/json'
    //     },
    //     body: JSON.stringify(donor)
    // }).then(res=>{
    //   Setlud2(true);
    // })


    // }

    //  console.log(lud2)


    //   Setlud2(true); 

    fetch(`${BASE_URL}/topsortdonor`)
      .then(res => res.json())
      .then(data => {
        Setsortdonor(data)
        // console.log(sortdonor)
      }
      )



  }, [])


  return (
    <div className="overflow-x-auto w-full lg:px-4 my-4 min-h-screen">
      <h2 className="text-center text-3xl lg:text-4xl xl:text-5xl my-4 md:my-8 lg:my-12">সর্বোচ্চ রক্তদাতাদের তালিকা</h2>
      <table className="table">
        <thead className="text-red-400 font-bold text-base lg:text-xl 2xl:text-2xl">
          <tr>
            <th>#</th>
            <th>নাম</th>
            <th>রক্তদান সংখ্যা</th>
            <th>ঠিকানা</th>
            <th>মোবাইল</th>
          </tr>
        </thead>
        <tbody className="text-xs lg:text-lg 2xl:text-xl">
          {
            sortdonor?.map((data, idx) =>
              <tr className="border-2 shadow-lg">
                <th>{idx + 1}</th>
                <td>{data.donorName}</td>
                <td>{data.donated}</td>
                <td>{data.area}</td>
                <td>{data.phone}</td>
              </tr>
            )
          }

        </tbody>
      </table>
    </div>
  )
}

export default Topdonor