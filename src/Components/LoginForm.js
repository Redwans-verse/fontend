import React, {useState} from 'react';
import axios from "axios";
import toast from "react-hot-toast";
import {useAuth} from "../context/UserContext";

const LoginForm = () => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [auth,setAuth]=useAuth()

    const handleSubmit=async (e)=>{
        e.preventDefault()
        try {
            const {data}= await axios.post('http://localhost:8000/api/v1/login',{
                email:email,
                password:password
            })
            if(data?.error){
                toast.error(data.error)
            }else {
                localStorage.setItem("auth", JSON.stringify(data));
                setAuth({ ...auth, token: data.token, user: data.user });
                toast.success('Login successful')
            }
        }catch (e){
            console.log(e.message)
        }
    }

    return (
        <div className='mainco'>
            <div className="login">

                <h1 className="text-center">Hello Again!</h1>

                <form onSubmit={handleSubmit}
                      className="needs-validation">
                    <div className="form-group was-validated">
                        <label className="form-label" htmlFor="email">Email address</label>
                        <input
                            className="form-control"
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e)=> setEmail(e.target.value)}
                            required/>
                        <div className="invalid-feedback">
                            Please enter your email address
                        </div>
                    </div>
                    <div className="form-group was-validated">
                        <label className="form-label" htmlFor="password">Password</label>
                        <input
                            className="form-control"
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e)=> setPassword(e.target.value)}
                            required/>
                        <div className="invalid-feedback">
                            Please enter your password
                        </div>
                    </div>
                    <div className="form-group form-check">
                        <input className="form-check-input" type="checkbox" id="check"/>
                        <label className="form-check-label" htmlFor="check">Remember me</label>
                    </div>
                    <input className="btn btn-success w-100" type="submit" value="SIGN IN"/>
                </form>

            </div>
        </div>
    );
};

export default LoginForm;