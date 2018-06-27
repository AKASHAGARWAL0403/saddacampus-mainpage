import React from "react";
import Layout from "./../RestrauntList/CardList"

export default class FoodItems extends React.Component{
    constructor(props)
    {
        super(props);
        console.log(this.props.ImageLinks)
    }
    render(){
        return(
        <div className="content" >
			<p id={this.props.ImageLinks.Category}>{this.props.ImageLinks.Category}</p>
              <Layout ImageLink={this.props.ImageLinks} />
            </div>
        )
    }
}