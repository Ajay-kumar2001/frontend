import axios from "axios"
import { useContext, useEffect, useState } from "react"
import Global from "../Global"
import DisplayProd from "../mainbodycomponent/DisplayProd"

let All=()=>{
    let [allData,setAllData]=useState([])
    let Gdata=useContext(Global)
    useEffect(()=>{
        axios.get("http://localhost:5000/All").then((res)=>setAllData([...res.data]))
  },[]) 
  console.log(allData)
  
  
    return(<div>
        <DisplayProd item={allData}/>
    </div>)
}
export default All