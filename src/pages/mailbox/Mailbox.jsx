import React, { useState } from 'react';
import { Link, Route } from 'react-router-dom';
import { useParams } from "react-router-dom";

import { useContext, useEffect } from "react";
import { BASE_URL } from '../../constVariables/constVariable';
import { AuthContext } from "../../provider/AuthProvider";
import { useNavigate } from 'react-router-dom';
import MessegeCard from '../../component/cards/MessegeCard';

const Mailbox = () => {
  const [message, setMessage] = useState('');
  const params = useParams(); //params.email
  const { user, logOut, darkMode, setDarkMode } = useContext(AuthContext)
  const navigate = useNavigate()

  const [senderprofile, Setsenderprofile] = useState({});
  const [receverprofile, Setreceverprofile] = useState({});
  const [datas, Setdatas] = useState([]);
  const [rec, Setrec] = useState("");
  const [refresh, Setrefresh] = useState(0)

  useEffect(() => {
    Setrec(params.receiver);
    console.log(params.receiver)
    const recevers = params.receiver;
    fetch(`${BASE_URL}/getdonor/${user.email}`)
      .then(res => res.json())
      .then(data => Setsenderprofile(data))

    // console.log(recevers)

    fetch(`${BASE_URL}/getdonor/${recevers}`)
      .then(res => res.json())
      .then(data => Setreceverprofile(data))


    fetch(`${BASE_URL}/text/${user.email}/${recevers}`)
      .then(res => res.json())
      .then(data => Setdatas(data))



  }, [refresh])

  // console.log(datas)

  const handlemail = () => {



    // Your email handling logic here
    // console.log( message);
    const sender = user.email;
    const recever = params.receiver;
    const now = new Date();
    const sendername = senderprofile.donorName;
    const recevername = receverprofile.donorName;

    const mail = { now, sender, recever, message, sendername, recevername }



    fetch(`${BASE_URL}/createtext`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(mail)
    })




    console.log(rec)

    navigate(`/mailbox/${rec}`);
    //Setrefresh(1);



  };

  return (
    <div className="flex justify-center mt-4 md:mt-8 lg:mt-12 min-h-screen">
      <div className="w-11/12 rounded-[12px] p-4 shadow-md">
        <p className="text-xl font-semibold  cursor-pointer transition-all ">
          বার্তা পাঠান
        </p>
        <form>
          <textarea
            className="h-40 p-4 mt-5 outline-none border-gray-300 bg-transparent w-full resize-none border rounded-lg placeholder:text-sm"
            placeholder="বার্তা লিখুন"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <div className="flex justify-between mt-2">
            <button
              onClick={handlemail}
              className="h-12 w-[150px] bg-blue-400 text-lg text-white rounded-lg transition-all cursor-pointer hover:bg-blue-600"
            >
              জমা
            </button>

          </div>
        </form>

        <div className='text-sm'>
          {

            datas?.map((text) => (
              <MessegeCard text={text} />
            ))
          }
        </div>


      </div>
    </div>
  );
};

export default Mailbox;
