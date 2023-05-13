import   "../CSSstyles/SliderImg.css"
let SlideImg=(props)=>{
    return(<div className="sliderImg">
        <img  className="sliderImg" src={props.data.url} alt="img"/>
    </div>)
}
export default  SlideImg