import axios from "axios"
import { useEffect, useState } from "react"
import DisplayProd from "../mainbodycomponent/DisplayProd"

let Mobails=()=>{
    let [mData,setMdata]=useState([])
   var data={"product_type": "mobile"}
    useEffect(()=>{axios.post("http://localhost:5000/mobiles",data).then((res)=>setMdata([...res.data]))
},[])
    return(<div>
    <DisplayProd item={mData} />
    </div>)
}
export default Mobails