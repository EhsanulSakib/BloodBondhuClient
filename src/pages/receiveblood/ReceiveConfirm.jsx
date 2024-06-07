
import React from 'react'
import { useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { Link, Route} from 'react-router-dom';
import Swal from 'sweetalert2'
import { BASE_URL } from '../../constVariables/constVariable';
import { useNavigate } from 'react-router-dom';


function ReceiveConfirm() {

    const [donor,setDonor]=useState([]);
    const [ludi,Setludi]=useState(false);
    const navigate=useNavigate();

    useEffect(()=>{
   
            fetch(`${BASE_URL}/topdonor`)
            .then(res => res.json())
            .then(data => {setDonor(data)
                Setludi(true);
            }
            )

            if(ludi){
                fetch(`${BASE_URL}/updatedonation`, {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(donor)
                })
            }

               Swal.fire({
       title: "ধন্যবাদ",
       text: "ব্লাড বন্ধু প্লাটফর্মের মাধ্যমে রক্ত গ্রহণের জন্য",
       icon: "success"
     });

     navigate("/")
          
  
  

    },[])
  return (
    <div>ReceiveConfirm</div>
  )
}

export default ReceiveConfirm