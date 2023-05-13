import { useContext, useState } from "react"
import axios from "axios"
import Global from "../Global"
import { useNavigate } from "react-router-dom"

let Login=()=>{
    let gdata=useContext(Global)
   let navigate=useNavigate()
    let [LoginData,setLoginData]=useState({"email":"","password":"","confirmPassword":""})
    let update=(e)=>{setLoginData({...LoginData,[e.target.name]:e.target.value})}

/* SENDINF USER DATA TO SERVER TO VALIVDATE*/ 
    let Login=async()=>{
        let res=await axios.post("http://localhost:5000/login",LoginData)
        if (res.data.token){ /*IF IT IS TRUE THEN WE ARE ALLOWING USER ESLE NOT ALLOWING*/
            alert(res.data.msg)
            localStorage.setItem("token",res.data.token)
            var data={...gdata,"token":res.data.token,"email":res.data.email,"isAdmin":res.data.roll,"islogin":true}
            gdata.updateGdata(data)
            navigate("/")
        }
        else{
            let {email,password,confirmPassword}=LoginData
            if (email&&password&&confirmPassword)
                alert(res.data.msg)
            else
                alert("Enter all the fild values")
            gdata={...gdata}
        }
        
    }


    return(<div className="loginfrom">
    <div className="loginPage">
           <input type="email" placeholder="Enter Email" name="email" onChange={update}/>
            <input type="password" placeholder="Enter Password" name="password"onChange={update} />
            <input type="password" placeholder="confirmPassword Password" name="confirmPassword" onChange={update} />
            <button onClick={Login}>Login</button>
    </div>
    </div>)
    
}
export default Login