import AllLinks from './AllLinks';
import './App.css';
import { BrowserRouter ,Route,Routes} from "react-router-dom"
import Register from './navComponents/Register';
import Login from './navComponents/Login';
import CartImg from './navComponents/CartImg';
import Global from './Global';
import { useState } from 'react';
import Slider from './mainbodycomponent/Slider';
import All from './SecondNavBar/All';
import Mobails from './SecondNavBar/Mobails';
import Laptops from './SecondNavBar/Laptos';
import ElectonicItems from './SecondNavBar/ElectonicItems';
import Glossary from './SecondNavBar/Glossary ';
import Logout from './navComponents/Logout';
import AddProd from './navComponents/AddProd';
// import SearchCom from './mainbodycomponent/SearchCom';


function App() {

let updateGdata=(data)=>{
SetGData({...Gdata,...data})
}
/*GLOBAL STATE OBJECT*/ 
let [Gdata,SetGData]=useState({"token":"","email":"","islogin":false,"isAdmin":"","updateGdata":updateGdata, "globalSearch":[] ,"search":"" ,"searching":false})

return (
    <Global.Provider value={Gdata}>
          <BrowserRouter>
              <AllLinks/>
             {!Gdata.islogin&& <Slider/>}
             <Routes>
                {/* FIRST NAV BAR COMPONRNTS */}
                <Route path="/register" element={<Register/>}/>
                <Route path="login" element={<Login/>} />
                <Route path="/logout" element={<Logout/>}/>
                <Route path="/cart" element={< CartImg/>}/>
                <Route path="/Addprod" element={<AddProd/>}/>

                {/* SECOND NAV BAR COMPONENTS */}
                <Route path="/All" element={<All/>}/>
                <Route path="/mobiles" element={<Mobails/>}/>
                <Route path="/laptops" element={<Laptops/>}/>
                <Route path="/electronicitems" element={<ElectonicItems/>}/>
                <Route path="glossary" element={<Glossary/>}/>
              </Routes>
          </BrowserRouter>
    </Global.Provider>
  );
}

export default App;
