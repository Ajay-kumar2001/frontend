import { useContext, useEffect, useState } from "react"
import Global from "../Global"

let DisplayProd=(props)=>{
  let Gdata= useContext(Global)
  useEffect(()=>{
  setSearch({...search,"productData":[...props.item],"GlobalSarchData":Gdata.search})    
  },[Gdata.search])

  
  let [search,setSearch]=useState({"GlobalSarchData":"","productData":[]})
  console.log(search)

 
  
    let Addtocart=()=>{
        console.log("hello")
      }
        return(<div>
                    
                  {props.item.filter((item)=>item.product_type.includes(search.GlobalSarchData) ||item.product_name.includes(search.GlobalSarchData)
                  ||item.product_color.includes(search.GlobalSarchData)||item.product_rating.includes(search.GlobalSarchData)).map((item)=>{
                    return(
                      <div>

                        <img src={item.img} alt="img"/>
                            <div>{item.product_type}</div>
                            <div>{item.product_name}</div>
                            <div>{item.product_color}</div>
                            <div>{item.product_rating}</div>
                            <div>{item.product_disp}</div>
                            <button onClick={Addtocart}>Add to cart</button>
                    </div>)})}
              </div> )   

             }
export default DisplayProd