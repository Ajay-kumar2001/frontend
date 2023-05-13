import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import DisplayProd from "../mainbodycomponent/DisplayProd"

let ElectonicItems=()=>{
    let [Edata,setEdata]=useState([])
    var data={"product_type": "electronic"}

    useEffect(()=>{
        axios.post("http://localhost:5000/electronicitems",data).then((res)=>{setEdata([...res.data])}).catch((er)=>console.log(er))
    },[])
    console.log(Edata)
    return(<div>
        <DisplayProd item={Edata}/>
    </div>)
}
export default ElectonicItems