import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
let Register=()=>{
    let navigate=useNavigate()
    let [RegData,setRegData]=useState({"user_Name":"","roll":"","email":"","password":"","confirmPassword":"" ,"phone":""})
    let update=(e)=>{
            setRegData({...RegData,[e.target.name]:e.target.value})
    }
    let Register=async()=>{
        console.log(RegData)
let res=await axios.post("http://localhost:5000/register",RegData)
console.log(res.data)
        navigate("/login")

    }
    return(
        <div className="registerPage"> 
              <h3>Create Account</h3>
            <input type="text" placeholder="enter user Name" name="user_Name" onChange={update} />
           <input type="email" placeholder="Enter Email" name="email" onChange={update}/>
            <input type="password" placeholder="Enter Password" name="password"onChange={update} />
            <input type="password" placeholder="confirmPassword Password" name="confirmPassword" onChange={update} />
            <input type="text" placeholder="Enter Phone no" name="phone" onChange={update}/>

            <input type="text" placeholder="Enter Roll" name="roll" onChange={update}/>


            <button onClick={Register}>Register</button>
    
        </div>

    )
}
export default Register