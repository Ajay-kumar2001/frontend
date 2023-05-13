import { useContext } from "react"
import Global from "../Global"

let UserDetaile=()=>{
    let gdata=useContext(Global)
  
     if (gdata.email){
        return(<div className="userCon">
               <div className="userImg"></div>
               <div>{gdata.email}</div>
            </div>
        )
     }
else{
    return(
        <div>
           user data 
        </div>
    )
}
}
export default UserDetaile