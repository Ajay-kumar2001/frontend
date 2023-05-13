import { useState } from "react"
import SlideImg from "./SliderImg"

let Slider=()=>{
    var img=[{"url":"https://images-eu.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T1/images/G/31/AmazonSmallBusinessDay/Jupiter21/Spotlight/eng_pc11.jpg","title":"0"},
    {"url":"https://images-eu.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T1/images/G/31/img17/Pantry/MARCH_2020/SVD_Teaser/Desktop_Teaser_Header.jpg","title":"1"},
    {"url":"https://pbs.twimg.com/media/FPEicAYacAIjLL3.jpg","title":"2"},
    {"url":"https://img.etimg.com/thumb/width-1200,height-900,imgsize-34920,resizemode-1,msid-94453762/top-trending-products/news/amazon-great-indian-festival-2022-festive-offers-on-the-best-mobile-phones.jpg","title":"3"},
    {"url":"https://images-eu.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T1/images/G/31/img19/Fashion/Diwali-Wave3/TEASER/TopBanner/Revised/PC_top-banner._CB450572186_.jpg","title":"4"}]
    let [Sliderdata,setSliderData]=useState({"c":0})
  let left=()=>{
    
    if(Sliderdata.c>0){
            setSliderData({...Sliderdata,"c":Sliderdata.c-1})
            
    }
    else if (Sliderdata.c===0){
       setSliderData({...Sliderdata,"c":4})}
}

  let right=()=>{
    if(Sliderdata.c<4){
            setSliderData({...Sliderdata,"c":Sliderdata.c+1})}
    else if(Sliderdata.c===4){
            setSliderData({...Sliderdata,"c":0})}

}

    
    return(<div className="slider">
    
    <button onClick={left}>left</button>
    {img.map((item, i)=>{

      if(Sliderdata.c===i){
       return<SlideImg data={item} i={i} key={i}/>}
       else{return (<div></div>)}
      }
       )
      
     
      
      }
    
    <button onClick={right}>right</button>
       


    </div>)
}
export default Slider