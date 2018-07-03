import React from "react";

var style={
    "width" : "250px",
    "float" : "left",
    "padding" : "7.5px",
    "margin"  : "7.5px",
    "border" : "0"
}

var CardBody = {
    "paddingTop": "5px",
    "paddingLeft": "5px",
    "paddingBottom"  : "1px"
}

var Image = {
    "borderRadius" : "0",
    "height" : "140px"
}

var Span = { 
    "fontSize": "12px",
    "position": "relative",
    "bottom": "8px",
    "left": "1px"
}
var Heading = {
    "marginBottom" : "0px"
}
const Card = (props)=>(
    <div className="card" style={style}>
    <img className="card-img-top" src={props.link} alt="Card image cap" style={Image} />
    <div className="card-body" style={CardBody} >
    <h5 className={"card-title "+ ( props.open?"card-open":"card-close")}  title={props.open?"Click to order":"Sorry restraunt is closed"} style={Heading} >{props.name}</h5>
    <span style={Span} className="subHeading" >BurgerWings</span>
    <div className="rating"><img src="/assets/images/ic_star_24px.png" className="starImage" /> <span className="ratingText"> 4.5</span></div>
    <span className="InfoPart">Min Order-: 200 &nbsp; &nbsp; &nbsp; <img src="/assets/images/dot.jpeg" className="dot" /> &nbsp; &nbsp; &nbsp; Free delivery</span>
  </div>
   </div>
)

export default Card;