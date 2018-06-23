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
              <h5 className="card-title" onClick={this.handleClick} >{this.props.name}</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
            </div>
        )
    }
}
    



export default Card;