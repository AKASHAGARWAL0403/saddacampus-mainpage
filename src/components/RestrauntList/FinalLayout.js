import React, { Fragment } from "react";
import List from "./CardList";
import Restraunt from "./restrauntBackground"
import "./../../styles/restrauntList.css"

var ImageLink=[];
class Layout extends React.Component{
    
    constructor(props)
    {
        super(props);
        this.state= {
            ImageLink : this.props.ImageLink
          }
    }

    componentWillMount(){
       ImageLink = this.props.ImageLink;
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
    <Restraunt ImageLink={this.state.ImageLink} FilterSearch={this.SeachBarResult} />
    <List history={this.props.history} ImageLink={this.state.ImageLink} />
    </Fragment>   
        )
    }
}
    export default Layout;