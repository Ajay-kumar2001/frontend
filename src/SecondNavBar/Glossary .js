import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import DisplayProd from "../mainbodycomponent/DisplayProd"
let Glossary=()=>{
    let [Gdata,setGdata]=useState([])
    var data={"product_type": "gossory"}

    useEffect(()=>{
        axios.post("http://localhost:5000/gossary",data).then((res)=>{setGdata([...res.data])}).catch((er)=>console.log(er))
    },[])
    return(<div>
        <DisplayProd item={Gdata}/>

    </div>)
}
export default Glossary