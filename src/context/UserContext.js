import {createContext, useContext, useEffect, useState} from "react";
import axios from "axios";

const UserContext= createContext()

const AuthProvider= ({children})=>{
    const [auth,setAuth]=useState({
        user:null,
        token:''
    })
    axios.defaults.headers.common["token"] = auth?.token;
    useEffect(()=>{
       const data= localStorage.getItem('auth')
        if(data){
            const parsed= JSON.parse(data)
            setAuth({...auth,user:parsed.user,token:parsed.token})
        }

    },[])
    return(
        <UserContext.Provider value={[auth,setAuth]}>
            {children}
        </UserContext.Provider>
    )

};

const useAuth= ()=> useContext(UserContext)
export {useAuth,AuthProvider}