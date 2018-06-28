import React, { Fragment } from "react";
import data from "./../RestrauntList/ImageLink.json"
import Test from "./test"
import Back from "./../RestrauntList/restrauntBackground";
import SubHeading from "./SubHeading"
import "./../../styles/test.css"
var ImageLink = [];
 export default class Final extends React.Component{
    constructor(props)
    {
        super(props);
        this.state= {
            ImageLink : data
          }
    }

    componentWillMount(){
       ImageLink = data;
    }

    SeachBarResult = (value)=>{
      var Result = ImageLink.ImageLink.filter((res)=>{
             return (res.restrauntName.toLowerCase().indexOf(value.toLowerCase())>=0)
         });
         this.setState(()=>({
             ImageLink : { "ImageLink" : Result},
        }))
         
         console.log(Result);
     }

    render(){
        return(
             <Fragment>
             <SubHeading />
             <Test ImageLink={this.state.ImageLink} />
             </Fragment>
        )
    }
}