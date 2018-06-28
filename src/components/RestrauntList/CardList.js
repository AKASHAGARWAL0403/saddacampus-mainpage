import React, { Fragment } from "react";
import CardGroup from "./cardGroup"



var CardComponent= [];
export default class CardList extends React.Component{
    constructor(props)
    {
        super(props);
    }
    CardUpdate = ()=>{
        if(this.props.ImageLink.ImageLink.length)
        {
        var TempLink= [];
        var FinalLink= [];
        for(var i=1;i<this.props.ImageLink.ImageLink.length; i++)
        {
            if(i%4 != 0)
            {
             TempLink.push(this.props.ImageLink.ImageLink[i-1]);
            }
            else
            {
              TempLink.push(this.props.ImageLink.ImageLink[i-1]);  
              FinalLink.push(TempLink);
              TempLink = [];
           }
        }
        TempLink.push(this.props.ImageLink.ImageLink[i-1]);  
        FinalLink.push(TempLink);
    
        CardComponent = FinalLink.map((links)=>{
           return <li key={links[0].link}> <CardGroup ImageLink={links} history={this.props.history} /></li>
         })
     }
     else{
         CardComponent = [];
     }
}
    
   render(){
    this.CardUpdate() ;
        return(
         <Fragment>
         {CardComponent}
         <br />
         <br />
         <br />
         <br />
         </Fragment>
        )
    }
}
