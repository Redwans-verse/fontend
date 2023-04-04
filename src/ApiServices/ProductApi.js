import axios from "axios";
import toast from "react-hot-toast";
const data = require("bootstrap/js/src/dom/data");
let url='http://localhost:8000/api/v1'

export async function create(productData){
    const postBody=productData

    console.log(postBody)

    try {
        const {data}= await axios.post(`${url}/product/create`,postBody)
        if(data?.error){
            console.log(data.error)
            toast.error(data.error)
        }else {
            console.log(data)
            toast.success('Product add success')
        }


    }catch (error){
        console.log(error.message)
    }

}

console.log(data)

