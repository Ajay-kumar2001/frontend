import axios from "axios"
import { useEffect, useState } from "react"
import DisplayProd from "../mainbodycomponent/DisplayProd"

let  Laptops=()=>{
    let [lData,setLData]=useState([])
    var data={"product_type": "laptop"}
    useEffect(()=>{
            axios.post("http://localhost:5000/laptops",data).then((res)=>setLData([...res.data])).catch((er)=>console.log(er))
    },[])
    return(<div>
        <DisplayProd item={lData}/>


    </div>)
}
export default Laptops