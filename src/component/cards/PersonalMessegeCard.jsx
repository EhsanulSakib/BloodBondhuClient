import React from 'react'
import { BASE_URL } from "../../constVariables/constVariable";
import { AuthContext } from "../../provider/AuthProvider";
import { Link, Route } from "react-router-dom";

import { useContext, useState, useEffect } from "react";
function PersonalMessegeCard({ data }) {
    const { user, logOut, darkMode, setDarkMode } = useContext(AuthContext);

    console.log(user.email)
    return (
        <div className='bg-blue'>

            {
                data._id === user.email ? "" :
                    <div
                        class="mb-4 px-8 w-11/12 mx-auto mt-4 border border-red-300 rounded-xl shadow-lg p-8 flex flex-col md:flex-row md:justify-between gap-4">
                        <div class="space-y-2 sm:text-left">
                            <div>
                                <p class="text-xl font-bold">
                                    {data._id}
                                </p>
                                <p class=" font-medium">
                                    ব্লাডবন্ধু ডোনার
                                </p>
                            </div>
                        </div>
                        <button class="px-4 py-1 text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 text-xl"><Link to={`/mailbox/${data._id}`}>মেসেজ </Link></button>
                    </div>

            }

        </div>
    )
}

export default PersonalMessegeCard