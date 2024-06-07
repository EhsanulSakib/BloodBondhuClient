import React from 'react'
import { useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { Link, Route } from 'react-router-dom';
import Swal from 'sweetalert2'
import { BASE_URL } from '../../constVariables/constVariable';
import { useNavigate } from 'react-router-dom';

function ReceiveBlood() {
  const params = useParams();


  const [donor, setDonor] = useState([]);
  const [lud, Setlud] = useState(false);
  const [lud2, Setlud2] = useState(false);
  const navigate = useNavigate();



  console.log(params.donormail);
  const handleConfirm = () => {


    let postid = params.postid;
    let donormail = params.donormail;

    const receive = { postid, donormail };    //check

    // fetch(`${BASE_URL}/confirmation`,{
    //     method: 'PUT',
    //     headers: {
    //         'content-type': 'application/json'
    //     },
    //     body: JSON.stringify(receive)
    // })
    fetch(`${BASE_URL}/confirmation`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(receive)
    })
      .then(res => {
        if (!res.ok) {
          throw new Error('Failed to confirm');
        }
        // Second fetch operation: GET request to /topdonor
        return fetch(`${BASE_URL}/topdonor`);
      })
      .then(res => {
        if (!res.ok) {
          throw new Error('Failed to fetch top donors');
        }
        return res.json();
      })
      .then(data => {
        // Update donor state
        setDonor(data);


        // Third fetch operation: PUT request to /updatedonation with the fetched donor data
        return fetch(`${BASE_URL}/updatedonation`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });
      })
      .then(res => {
        if (!res.ok) {
          throw new Error('Failed to update donation');
        }
        return res.json();
      })
      .then(data => {
        console.log('Donation updated successfully:', data);
      })
      .catch(error => {
        console.error('Error:', error);
      });



    //  Swal.fire({
    //      title: "The Internet?",
    //      text: "That thing is still around?",
    //      icon: "success"
    //    });
    navigate("/receiveconfirm")

  }
  return (
    <div className='flex min-h-screen items-center justify-center'>

      <div className='bg-red-400 w-[40%] flex flex-col gap-12 items-center justify-center h-96 shadow-2xl rounded-xl'>

        <h1 className='text-2xl'> আমি রক্ত নিলাম।</h1>

        <div>
          <button className='bg-slate-100 hover:bg-slate-50 font-extrabold p-2 rounded-md'>Cancel</button>

          <button onClick={handleConfirm} className='ml-6 bg-slate-100 hover:bg-slate-50 font-extrabold p-2 rounded-md'>Confirm</button>
        </div>

      </div>
    </div>
  )
}

export default ReceiveBlood