import React, { Fragment } from "react";
import Card from "./card"
import EmptyCard from "./EmptyCard"
var cards= "";
 class Group extends React.Component{
     constructor(props)
     {
         super(props);
     }
    render(){
         return(
            <div className="container">
            <div className="row">
            <div className="card-deck">
              { this.props.ImageLink[0] != undefined ? <Card imageLink={this.props.ImageLink[0]} /> :  <EmptyCard /> }
              { this.props.ImageLink[1] != undefined ? <Card imageLink={this.props.ImageLink[1]} /> :  <EmptyCard /> }
              { this.props.ImageLink[2] != undefined ? <Card imageLink={this.props.ImageLink[2]} /> :  <EmptyCard /> }
            </div>
            </div>
            </div>
         )
     }
   
}

export default Group;