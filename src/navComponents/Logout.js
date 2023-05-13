import { useContext } from "react"
import Global from "../Global"
import { useNavigate } from "react-router-dom"

let Logout=()=>{
    let navigate=useNavigate()
    let gdata=useContext(Global)
   var  data={...gdata,"token":"","email":"","islogin":false,"isAdmin":""}
    gdata.updateGdata=(data) 
    navigate("/")  
        return(
        <div></div>
    )
}
export default Logout