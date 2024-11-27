import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../components/Home";
import AllTreatment from "../components/AllTreatment";
import MyAppointMent from "../components/MyAppointMent";
import Profile from "../components/Profile";
import Details from "../components/Details";
import Login from "../components/Login";
import Register from "../components/Register";
import PrivateRoutes from "../components/PrivateRoutes/PrivateRoutes";



const router=createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:async()=>{
                    const serviceRef=await fetch('/service.json');
                    const serviceData=await serviceRef.json();

                    const feedRes=await fetch('/feedbadk.json')
                    const feedData=await feedRes.json();

                    return {serviceData,feedData}
                }
            },
            {
                path:'/alltreatment',
                element:<AllTreatment></AllTreatment>,
                loader:()=>fetch('/service.json')
            },
            {
                path:'myappointment',
                element:<PrivateRoutes><MyAppointMent></MyAppointMent></PrivateRoutes>
            },
            {
                path:'profile',
                element:<Profile></Profile>
            },
            {
                path:'/details/:id',
                element:<PrivateRoutes>
                    <Details></Details>
                </PrivateRoutes>,
                loader:async({params})=>{
                    const res=await fetch('/service.json')
                    const data=await res.json()
                    // console.log(data)
                    const singleData=data.find(d=>d.id==params.id)
                    //  console.log(singleData)
                     return singleData;
                }
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
        ]

    }
])

export default router;