import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { BASE_URL } from "../../constVariables/constVariable";
import { AuthContext } from "../../provider/AuthProvider";
import { MdPersonAddDisabled } from "react-icons/md";

const AllUser = () => {
    const { loading, setLoading } = useContext(AuthContext)
    const [allUser, setAllUser] = useState([])

    useEffect(() => {
        axios.get(`${BASE_URL}/allUser`)
            .then(res => {
                setAllUser(res.data)
                setLoading(false)
            })
            .catch(err => {
                console.log(err)
                setLoading(false)
            })
    }, [])

    return (
        <div className="overflow-x-auto w-full lg:px-4 my-4">
            <table className="table">
                {/* head */}
                <thead className="text-red-400 font-bold text-base lg:text-xl 2xl:text-2xl">
                    <tr>
                        <th>#</th>
                        <th>নাম</th>
                        <th>ইমেইল</th>
                        <th>বহিস্কার</th>
                    </tr>
                </thead>
                <tbody className="text-xs lg:text-lg 2xl:text-xl">
                    {
                        allUser?.map((user, idx) =>
                            <tr>
                                <th>{idx + 1}</th>
                                <td>{user.displayName}</td>
                                <td>{user.email}</td>
                                <td><button className="btn btn-error font-bold text-xl text-white btn-sm "><MdPersonAddDisabled /></button></td>
                            </tr>
                        )
                    }

                </tbody>
            </table>
        </div>
    );
};

export default AllUser;