import { useForm } from "react-hook-form";
import { AuthContext } from "../../provider/AuthProvider";
import { useContext, useState } from "react";
const Complain = () => {
    const { user } = useContext(AuthContext)
    const { register, handleSubmit } = useForm()

    const onSubmit = (data) => {
        const { complain } = data;

        const complainerName = user.displayName
        const complainerEmail = user.email

        const complainData = {
            complainerName,
            complainerEmail,
            complain
        }

        // #TODO: Make Complain API
        fetch(`${BASE_URL}/complain`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newPosts)
        }).then(res => res.json)
            .then(data => {
                console.log("Hello")


            })

        Swal.fire({
            title: 'অভিনন্দন',
            text: 'আপনার পোস্ট সফল হয়েছে!',
            icon: 'success',
            confirmButtonText: 'Ok'
        }).then(() => {
            navigate('/')
        })
    }
    return (
        <div className="my-4 md:my-8 lg:my-12 min-h-screen">
            <h2 className="text-center text-3xl lg:text-4xl xl:text-5xl my-4 md:my-8 lg:my-12">অভিযোগ/প্রশ্ন</h2>

            <form onSubmit={handleSubmit(onSubmit)} className="w-11/12 m-auto">
                <h2 className="mb-4">অভিযোগদাতার নাম: {user.displayName}</h2>
                <h2 className="mb-8">অভিযোগদাতার ইমেইল: {user.email}</h2>

                <textarea name="complain" className="w-full h-72 max-h-72 bg-transparent border-2 shadow-sm rounded-md p-2" {...register("complain")}></textarea>
                <div className="form-control mt-6">
                    <button className="btn w-full lg:w-1/6 rounded-md bg-red-400 hover:bg-red-600 border-none text-white text-lg lg:text-xl xl:text-2xl font-bold cursor-pointer">বার্তা পাঠান</button>
                </div>
            </form>
        </div >
    );
};

export default Complain;