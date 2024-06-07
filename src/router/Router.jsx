import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/root/Root";
import ErrorPage from "../component/errorPage/ErrorPage";
import Home from "../pages/home/Home";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";
import DonorForm from "../pages/donorForm/DonorForm";
import MainPage from "../pages/mainpage/MainPage";
import CreatePost from "../pages/createPost/CreatePost"
import EmergencyRequest from "../pages/emergencyRequ/EmergencyRequest"
import Usersettings from "../pages/usersettings/Usersettings"
import ResponseBox from "../pages/responsebox/ResponseBox";
import ReceiveBlood from "../pages/receiveblood/ReceiveBlood";
import Requestbox from "../pages/request/Requestbox"
import Topdonor from "../pages/topdonor/Topdonor";
import Personal from "../pages/mails/Personal"
import Mailbox from "../pages/mailbox/Mailbox";
import ReceiveConfirm from "../pages/receiveblood/ReceiveConfirm";
import Working from "../pages/workingprocess/Working";
import RequConfirm from "../pages/requconfirm/RequConfirm";


import { BASE_URL } from "../constVariables/constVariable";
import PrivateRouter from "./PrivateRouter";
import Complain from "../pages/complain/Complain";
import Dashboard from "../pages/dashboard/Dashboard";
import AdminRouter from "./AdminRouter";
import AllUser from "../component/allUser/AllUser";
const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/donor-register',
                element: <DonorForm></DonorForm>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/complain',
                element: <PrivateRouter><Complain></Complain></PrivateRouter>
            },
            {
                path: '/explore',
                element: <PrivateRouter><MainPage></MainPage></PrivateRouter>
            },
            {
                path: '/createpost',
                element: <PrivateRouter><CreatePost></CreatePost></PrivateRouter>
            },
            {
                path: '/all-post',
                element: <PrivateRouter><MainPage></MainPage></PrivateRouter>
            },
            {
                path: '/mailbox/:receiver',
                element: <PrivateRouter><Mailbox></Mailbox></PrivateRouter>
            },
            {
                path: '/emergencyrequest',
                element: <PrivateRouter><EmergencyRequest></EmergencyRequest></PrivateRouter>
            },
            {
                path: '/profile',
                element: <PrivateRouter><Usersettings></Usersettings></PrivateRouter>
            },
            {
                path: '/responsebox/:email',
                element: <PrivateRouter><ResponseBox></ResponseBox></PrivateRouter>
            },
            {
                path: '/receiveblood/:postid/:donormail',
                element: <PrivateRouter><ReceiveBlood></ReceiveBlood></PrivateRouter>
            },
            {
                path: '/requestbox/:email/:area',
                element: <PrivateRouter><Requestbox></Requestbox></PrivateRouter>
            },
            {
                path: '/topdonor',
                element: <Topdonor></Topdonor>
            },
            {
                path: '/personalmail',
                element: <PrivateRouter> <Personal></Personal></PrivateRouter>
            },
            {
                path: '/receiveconfirm',
                element: <PrivateRouter> <ReceiveConfirm></ReceiveConfirm></PrivateRouter>
            },
            {
                path: '/workingprocess',
                element: <Working></Working>,
            },
            {
                path: '/requ/:email',
                element: <PrivateRouter> <RequConfirm></RequConfirm></PrivateRouter>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <AdminRouter><Dashboard></Dashboard></AdminRouter>,
        children: [{
            path: '/dashboard/all-user',
            element: <AdminRouter><AllUser></AllUser></AdminRouter>
        },
        {
            path: '/dashboard/explore',
            element: <PrivateRouter><MainPage></MainPage></PrivateRouter>
        }
        ]
    }
])

export default router;