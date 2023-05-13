import { useContext, useState } from "react"
import Global from "../Global"

let Search=()=>{
    let [searchData,setSearchData]=useState({"search":"" ,"searching":""})//local state to store the searched item by default searching is false
    let Gdata=useContext(Global)
    let searchdata=(e)=>{
        setSearchData({...searchData,"search":e.target.value,"searching":true})
        Gdata.updateGdata({...Gdata,...searchData})// passing searched item to the global context
        
    }
    
  
    return(
        <div>   
            <div >
                <input className="search" type="text " placeholder="search" onChange={searchdata}/>
                {/* <button className="searchbox" onClick={search}>search</button> */}
            </div>
    
    </div>)
    
}
export default Search