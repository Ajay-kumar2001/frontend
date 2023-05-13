import axios from "axios"
import { useContext, useState } from "react"
import Global from "../Global"

let AddProd=()=>{
    let Gdata=useContext(Global)
    let [prodData,setProdData]=useState({"product_type":"","product_name":"","product_color":"","product_rating":"","product_disp":""})
    let [img,setImg]=useState()
    let setData=(e)=>{
        setProdData({...prodData,[e.target.name]:e.target.value})
    }
    let setImgData=(e)=>{
        setImg(e.target.files[0])
        console.log(img)

    }
    let sendFormData=()=>{
        const formData=new FormData()
        formData.append("product_type",prodData.product_type)
        formData.append("product_name",prodData.product_name)
        formData.append("product_color",prodData.product_color)
        formData.append("product_rating",prodData.product_rating)
        formData.append("product_disp",prodData.product_disp)
        formData.append("img",img)
      //  formData.append ("obj", {"product_type":prodData.product_type})
        let obj= {...formData}
        console.log("obj",...formData)

    axios.post("http://localhost:5000/products",formData,{headers:{'Content-Type':'multipart/form-data'}})
    }
    return(<div>
        <input type="text" placeholder="product_type" name="product_type" onChange={setData}/>
        <input type="text" placeholder="product_name" name="product_name" onChange={setData}/>
        <input type="text" placeholder="product_color" name="product_color" onChange={setData}/>
        <input type="text" placeholder="product_rating" name="product_rating" onChange={setData}/>
        <input type="text" placeholder="product_disp" name="product_disp" onChange={setData}/>
        <input multiple type="file" placeholder="addImg" name="img"onChange={setImgData}/>
        <button onClick={sendFormData}>AddProduct</button>
</div>)

}
export default AddProd