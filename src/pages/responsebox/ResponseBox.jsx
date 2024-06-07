import React from 'react'
import { Link, Route } from 'react-router-dom';
import CreatePost from "../createPost/CreatePost"

import { useContext, useState, useEffect } from "react";
import { BASE_URL } from '../../constVariables/constVariable';
import { AuthContext } from "../../provider/AuthProvider";
import Postcards from '../../component/cards/Postcards';
import ResponseCard from '../../component/cards/ResponseCard';
import { useParams } from "react-router-dom";
function ResponseBox() {

  const params = useParams(); //params.email

  const [allrequest, Setallrequest] = useState([]);
  const [post, Setpost] = useState([]);

  const { user, logOut, darkMode, setDarkMode } = useContext(AuthContext)

  useEffect(() => {


    const fetchGetpostData = async () => {
      try {
        const response = await fetch(`${BASE_URL}/posts/${params.email}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const data = await response.json();
        Setpost(data);
      } catch (error) {
        console.error('Error fetching get data:', error);
      }
    };
    fetchGetpostData();
    Setallrequest(post.request)
    console.log(post)




    // const fetchDonorData = async () => {
    //   try {
    //     const response = await fetch(`${BASE_URL}/getdonor`, {
    //       method: 'GET',
    //       headers: {
    //         'Content-Type': 'application/json'
    //       }
    //     });
    //     const data = await response.json();
    //     Setdonorlist(data);
    //   } catch (error) {
    //     console.error('Error fetching get data:', error);
    //   }
    // };

    // fetchDonorData();

    // for(let i=0;i<donorlist.length;i++){
    //   if(donorlist[i].email===user.email){
    //     Setcurrentuser(donorlist[i]);
    //   }
    // }

  }, [])
  return (
    <div className='min-h-screen'>
      <div className='text-center m-4 p-2'>প্রতিক্রিয়াসমূহ</div>
      <div>

        {
          post === undefined ? <p>কোনো পোস্ট নেই</p> :
            <div>
              {
                post.map((posts) => (
                  <ResponseCard post={posts} />
                ))
              } </div>

        }





      </div>
    </div>
  )
}

export default ResponseBox