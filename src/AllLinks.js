import {Link} from "react-router-dom"
import Search from "./navComponents/Search"
import UserDetaile from "./navComponents/UserDetaile"
import  "./CSSstyles/mainNavbar.css"
import "./CSSstyles/secondNavBar.css"
import BrandImg from "./navComponents/BrandgImg"
import { useContext } from "react"
import Global from "./Global"

let AllLinks=()=>{
    let gdata=useContext(Global)
    return(<div>
            {/* FIRST NAV BAR COMPONRNTS */}
            <div className="mainNavbar">
                <BrandImg/>
                <Search/>
                {!gdata.islogin&& <Link className="linkColor" id="loginsDisp" to="/register">Register</Link>}
                {!gdata.islogin&&<Link className="linkColor" id="loginsDisp " to  ="/login"> Login</Link>}
                <UserDetaile/>
                <Link className="linkColor" to="/logout">Logout</Link>
                <Link className="linkColor" to="/cart">Cart</Link>
                <Link className="linkColor" to= "/Addprod">AddProducts</Link>
            </div>
                {/* SECOND NAV BAR COMPONENTS */}
                {gdata.islogin&&<div className="secondNavBar">
                <Link  className="linkColor" to="/All">All</Link>
                <Link  className="linkColor" to="/mobiles">Mobiles</Link>
                <Link  className="linkColor" to="/laptops">Laptops</Link>
                <Link  className="linkColor" to="/electronicitems">electronic Items</Link>
                <Link  className="linkColor" to="/glossary">Gossary</Link>
        </div>}
    </div>)
}
  export default AllLinks 
    