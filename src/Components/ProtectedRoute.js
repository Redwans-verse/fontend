import React, {useEffect, useState} from 'react';
import {useAuth} from "../context/UserContext";
import {Outlet} from "react-router-dom";
import Loading from "./Loading";

const ProtectedRoute = () => {
    const [ auth , setAuth ]=useAuth()
    const [ ok, setOk ]=useState(false)


    useEffect(()=>{
        if(auth?.token){
            setOk(true)
        }else{
            setOk(false)
        }

    },[auth?.token])

    return ok ? <Outlet/> : <Loading></Loading>

};

export default ProtectedRoute;