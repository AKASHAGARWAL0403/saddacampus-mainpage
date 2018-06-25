import React from "react";
import {Redirect} from 'react-router-dom';
class  Card extends React.Component{
    constructor(props)
    {
        super(props);
    }
 
    handleClick = ()=>{
        this.props.history.push(`/restraunt/${this.props.name}`);
    }   
    render(){
        return(
            <div className="card">
            <img className="card-img-top" src={this.props.imageLink} alt="Card image cap" />
            <div className="card-body">
              <h5 className={"card-title "+ ( this.props.open?"card-open":"card-close")}  onClick={this.props.open?this.handleClick:"none"} >{this.props.name}</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <span className={"label-"+ ( this.props.open?"open":"close")} >{this.props.open?"Open":"Close"}</span>
            </div>
            </div>
        )
    }
}
    



export default Card;