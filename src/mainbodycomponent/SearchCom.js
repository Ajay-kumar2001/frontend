
let SearchCom=(props)=>{

  let Addtocart=()=>{
    console.log("hello")
  }
  console.log(props.item)
    return(<div>

    
    <img src={props.item.img} alt="img"/>
                    <div>{props.item.product_type}</div>
                    <div>{props.item.product_name}</div>
                    <div>{props.item.product_color}</div>
                    <div>{props.item.product_rating}</div>
                    <div>{props.item.product_disp}</div>
                    <button onClick={Addtocart}>Add to cart</button>

               

         </div>)
}
export default SearchCom