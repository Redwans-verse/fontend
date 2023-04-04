import {useState} from "react";
import axios from "axios";
import toast from 'react-hot-toast';
import '../app.css'
import {useAuth} from "../context/UserContext";



const RegForm = () => {

    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [auth,setAuth]=useAuth()



    const handleSubmit= async (e)=>{

        e.preventDefault()

        try {


            const {data}=await axios.post('http://localhost:8000/api/v1/create',{
                name:name,
                email:email,
                password:password
            })
            console.log(data)

            if (data?.error) {
                toast.error(data.error);
            } else {
                localStorage.setItem('auth',JSON.stringify(data))
                setAuth({ ...auth, token: data.token, user: data.user });
                toast.success("Registration successful");
            }

        }catch (e){
            console.log(e)
            toast.error("Registration failed. Try again.");

        }

    }



    return (
       <div className='mainco'>
           <div className="login">

               <h1 className="text-center">Register Here!</h1>

               <form onSubmit={handleSubmit}
                     className="needs-validation">

                   <div className="form-group was-validated">
                       <label className="form-label" htmlFor="email">Name</label>
                       <input
                           className="form-control"
                           type="text"
                           id="email"
                           value={name}
                           onChange={(e)=> setName(e.target.value)}
                           required/>

                   </div>

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

                   <input className="btn btn-success w-100" type="submit" value="SIGN UP"/>
               </form>

           </div>
       </div>
    );
};

export default RegForm;