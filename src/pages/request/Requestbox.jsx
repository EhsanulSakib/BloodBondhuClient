import React from 'react'
import { Link, Route} from 'react-router-dom';
import { useParams } from "react-router-dom"
import { useContext, useState ,useEffect} from "react";
import { BASE_URL } from '../../constVariables/constVariable';
import { AuthContext } from "../../provider/AuthProvider";
import GraphMap from './GraphMap';
import RequestCard from '../../component/cards/RequestCard';

import Postcards from '../../component/cards/Postcards';

  // if(emergency==='yes'){ //emergency then notiify
  //   let email=user.email
  //   const adjacent=GraphMap(area);
  //   const newData={email,newBooks,adjacent}
  //   fetch(`${BASE_URL}/notify`, {
  //       method: 'PUT',
  //       headers: {
  //           'content-type': 'application/json'
  //       },
  //       body: JSON.stringify(newData)
  //   })
        
  // }



function Requestbox() {
  const [userdata,Setuserdata]=useState({});
  const [post,Setpost]=useState([]);
  const [notify,Setnotify]=useState([])
  const [filtr,Setfiltr]=useState([]);
  const params=useParams();
  const [lud,setLud]=useState(true);

  const { user,loading,setLoading, logOut, darkMode, setDarkMode } = useContext(AuthContext)
  
  useEffect(()=>{ 
    // setLoading(true);   

  fetch(`${BASE_URL}/requestpost/${user.email}`)
  .then(res => res.json())
  .then(data => {Setpost(data)

    fetch(`${BASE_URL}/getgraph/${params.area}`)
    .then(res => res.json())
    .then(data => {Setnotify(data)
      setLud(false);
    })
  })


  
// if(!lud){
//   console.log(notify.connections.length)
// }



  // const area=userdata?.area;
  // const adjacent=GraphMap(area);
  // Setnotify(adjacent)
  //  console.log(notify)

//   if(notify?.connections.length===4){
//   console.log(68)
// }

},[])







  return (
    <div className='min-h-screen'>


      {
        notify.length===0? <div class="m-10 text-center">
        <h1 class="text-gray-500 font-bold text-2xl tracking-wide">কোনো জরুরি রিকোয়েস্ট নেই</h1>
    </div>  :
        <div class="m-10 text-center">
            <h1 class="text-gray-500 font-bold text-2xl tracking-wide">রিকুয়েস্ট বক্সে রেসপন্স করুন</h1>
        </div>
      }
      

       
        
  {
    notify.map((data)=>(
      <RequestCard data={data} key={data._id}/>
      // <h1>{data.patientname}</h1>
    ))
  }

    


    </div>
  )
}

export default Requestbox