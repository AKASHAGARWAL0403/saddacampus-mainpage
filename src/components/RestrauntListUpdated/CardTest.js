import React from "react";
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import {faStar} from "@fortawesome/fontawesome-free-solid"
var style={
    "width" : "250px",
    "float" : "left",
    "margin" : "15px",
    "border" : "0"
}

var CardBody = {
    "paddingTop": "5px",
    "paddingLeft": "5px",
}

var Image = {
    "borderRadius" : "0"
}

var Span = { 
    "fontSize": "10px",
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
    <div className="rating"><img src="/assets/images/star-16.jpg" className="starImage" /> <span className="ratingText"> 4.5</span></div>
    <span className="InfoPart">Min Order-: 200</span>
  </div>
   </div>
)

export default Card;