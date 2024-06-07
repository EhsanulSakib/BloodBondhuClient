import React from 'react'
import { Link, Route } from 'react-router-dom';
import CreatePost from "../createPost/CreatePost"

import { useContext, useState, useEffect } from "react";
import { BASE_URL } from '../../constVariables/constVariable';
import { AuthContext } from "../../provider/AuthProvider";
import Postcards from '../../component/cards/Postcards';

function MainPage() {
  const [post, SetPost] = useState([]);
  const [donorlist, Setdonorlist] = useState([]);
  const { user, logOut, darkMode, setDarkMode } = useContext(AuthContext)
  const [iamuser, Setiamuser] = useState();
  // const [mymail, Setmymail] = useState();
  const [userdata, Setuserdata] = useState({});




  useEffect(() => {
    // Setmymail(user.email);

    fetch(`${BASE_URL}/posts`)
      .then(res => res.json())
      .then(data => SetPost(data))
  }, [])

  useEffect(() => {
    fetch(`${BASE_URL}/getdonor`)
      .then(res => res.json())
      .then(data => Setdonorlist(data))
  }, [])

  useEffect(() => {
    fetch(`${BASE_URL}/getdonor/${user.email}`)
      .then(res => res.json())
      .then(data => Setuserdata(data))
  }, [])





  return (
    <div>

      {/* <div className='bg-blue-200 text-center'><Link to={"/createpost"}>Create Post</Link></div>
      <div className='bg-blue-200 text-center'><Link to={`/responsebox/${user.email}`}>response Box</Link></div>
      <div className='bg-blue-200 text-center'><Link to={`/requestbox/${user.email}/${userdata.area}`}>Emergency Request Box</Link></div>
      <div className='bg-blue-200 text-center'><Link to={`/topdonor`}>Topdonor</Link></div>
      <div className='bg-blue-200 text-center'><Link to={`/personalmail`}>Personal Mails</Link></div>
 */}


      <div className='min-h-screen'>
      <div class="m-10 text-center">
            <h1 class="text-gray-500 font-bold text-3xl tracking-wide">সকল পোস্ট</h1>
        </div>

        <div>
          {
            post.map((postdata) => (
              <Postcards key={postdata.email} postdata={postdata} donorlist={donorlist} />
            ))
          }
        </div>
      </div>

    </div>
  )
}

export default MainPage