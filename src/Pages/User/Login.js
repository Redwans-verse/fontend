import React from 'react';
import {useAuth} from "../../context/UserContext";
import LoginForm from "../../Components/LoginForm";

const Login = () => {

    const [auth,setAuth]=useAuth()
    return (
        <div>
           <LoginForm/>
        </div>
    );
};

export default Login;