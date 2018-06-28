import React, { Fragment } from "react";
import Card from "./card"
import EmptyCard from "./EmptyCard"

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
            { this.props.ImageLink[0] != undefined ? <Card history={this.props.history}
                imageLink={this.props.ImageLink[0].link}
                name={this.props.ImageLink[0].restrauntName}
                open= {this.props.ImageLink[0].open}/>:  <EmptyCard /> }
            { this.props.ImageLink[1] != undefined ? <Card history={this.props.history} 
				imageLink={this.props.ImageLink[1].link} 
				name={this.props.ImageLink[1].restrauntName}
				open= {this.props.ImageLink[1].open}/>:  <EmptyCard /> }
            { this.props.ImageLink[2] != undefined ? <Card history={this.props.history}
				imageLink={this.props.ImageLink[2].link} 
				name={this.props.ImageLink[2].restrauntName} 
                open= {this.props.ImageLink[2].open}/>:  <EmptyCard /> }
            { this.props.ImageLink[3] != undefined ? <Card history={this.props.history}
				imageLink={this.props.ImageLink[3].link} 
				name={this.props.ImageLink[3].restrauntName} 
				open= {this.props.ImageLink[3].open}/>:  <EmptyCard /> }    
            </div>
            </div>
            </div>
         )
     }
   
}

export default Group;