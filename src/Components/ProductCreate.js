import React, {useState} from 'react';
import {create} from "../ApiServices/ProductApi";
import axios from "axios";
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom";


const ProductCreate = () => {

    const [name,setName]=useState('')
    const [qty,setQty]=useState()
    const [unit,setUnit]=useState()
    const [myFile,setMyFile]=useState('')

    let navigate=useNavigate()


    const handleSubmit=async (e)=>{
        e.preventDefault()
        try {
            const productData= new FormData()
            productData.append("myFile", myFile);
            productData.append("productName", name);
            productData.append("qty", qty);
            productData.append("unitPrice", unit);

            const {data}= await axios.post(`http://localhost:8000/api/v1/product/create`,productData)
            if(data?.error){
                console.log(data.error)
                toast.error(data.error)
            }else {
                console.log(data)
                toast.success('Product add success')
                setName('')
                setUnit('')
                setQty('')
                navigate('/dashboard/list')
            }
        }catch (e) {
            console.log(e)
            toast.error('error')
        }


    }
    return (
        <div className='mainco'>
            <div className="login">

                <h1 className="text-center">Create Product!</h1>

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
                        <label className="form-label" htmlFor="email">Quentity</label>
                        <input
                            className="form-control"
                            type="number"
                            id="email"
                            value={qty}
                            onChange={(e)=> setQty(e.target.value)}
                            required/>
                    </div>
                    <div className="form-group was-validated">
                        <label className="form-label" htmlFor="password">Unit Price</label>
                        <input
                            className="form-control"
                            type="number"
                            id="password"
                            value={unit}
                            onChange={(e)=> setUnit(e.target.value)}
                            required/>

                    </div>

                    <div className="form-group was-validated">
                        <label className="form-label" htmlFor="password">Image</label>
                        <input
                            className="form-control"
                            type="file"
                            id="password"
                            name='myFile'
                            onChange={(e)=> setMyFile(e.target.files[0])}
                            required/>

                    </div>

                    <input className="btn btn-success w-100" type="submit" value="CREATE"/>
                </form>

            </div>
        </div>
    );
};

export default ProductCreate;