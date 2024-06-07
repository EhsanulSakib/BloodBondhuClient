

import React, { useState, useEffect, useContext } from 'react';
import { Link, Route } from 'react-router-dom';
import { useParams } from "react-router-dom";

import { BASE_URL } from '../../constVariables/constVariable';
import { AuthContext } from "../../provider/AuthProvider";
import PersonalMessegeCard from '../../component/cards/PersonalMessegeCard';


function Personal() {
  const [post, Setpost] = useState([]);
  const [sender, Setsender] = useState([])
  const [recever, Setrecever] = useState([])
  const [uniquerecever, Setuniquerecever] = useState([]);
  const { user, logOut, darkMode, setDarkMode } = useContext(AuthContext)


  useEffect(() => {
    fetch(`${BASE_URL}/alltext`)
      .then(res => res.json())
      .then(data => Setpost(data))


    fetch(`${BASE_URL}/textsender/${user.email}`)
      .then(res => res.json())
      .then(data => Setsender(data))

    fetch(`${BASE_URL}/textrecever/${user.email}`)
      .then(res => res.json())
      .then(data => Setrecever(data))

  }, [])

  console.log(recever)


  return (
    <div className='min-h-screen'>

      <div class="m-10 text-center">
        <h1 class="font-bold text-2xl lg:text-3xl xl:text-4xl tracking-wide">মেইলবক্স</h1>
      </div>

      {

        recever?.map((dta) => (
          <PersonalMessegeCard data={dta} key={dta._id} />

        ))
      }

      {

        sender?.map((dta) => (
          <PersonalMessegeCard data={dta} key={dta._id} />
        ))
      }




    </div>
  )
}

export default Personal