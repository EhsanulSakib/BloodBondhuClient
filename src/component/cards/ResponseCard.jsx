import React from 'react'
import SubResponseCard from './SubResponseCard'
import { BASE_URL } from '../../constVariables/constVariable';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';
function ResponseCard({ post }) {
  console.log(post._id);
  const navigate = useNavigate();

  const handledelete = () => {
    //   const response = await fetch(`${BASE_URL}/postdelete/${post._id}`, {
    //     method: 'DELETE',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     }
    // });

    const deletepost = async () => {

      const response = await fetch(`${BASE_URL}/postdelete/${post._id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      });

    };
    deletepost();


    Swal.fire({
      title: "ধন্যবাদ",
      text: "পোস্ট টি ডিলিট হয়েছে",
      icon: "success"
    });

    navigate("/")

  }


  return (
    <div className='border border-red-400 rounded-md p-4 lg:p-8 m-4 lg:my-8 shadow-md'>
      {
        post.emergency ? <h2 className="font-bold text-red-700 mb-3">#জরুরি</h2> :
          ""
      }
      <h2 className="text-xl lg:text-2xl xl:text-4xl font-bold">{post.details}</h2>
      <div className="my-1 flex gap-2">
        <h2>{post.postcreated.split('T')[0]}</h2>
        <h2>({post.postcreated.split('T')[1].split(".")[0]})</h2>
      </div>
      <h2 className="text-lg lg:text-xl xl:text-2xl text-red-600">রক্তর গ্রুপ: {post.bloodGroup}</h2>
      <h2 className="text-lg lg:text-xl xl:text-2xl text-red-600">এলাকা: {post.area}</h2>
      <button className=' mt-2 mb-8 btn bg-red-600 hover:bg-red-400 text-white border-none' onClick={handledelete}>
        পোস্টটি ডিলিট করুন
      </button>

      {
        post.request === undefined ? <p>No response found</p> :
          <div>

            {
              post.request.map((requ) => (
                <SubResponseCard requ={requ} postid={post._id} />
              ))
            }

          </div>
      }

    </div>
  )
}

export default ResponseCard