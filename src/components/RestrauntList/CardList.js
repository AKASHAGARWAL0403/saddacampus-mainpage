import React, { Fragment } from "react";
import CardGroup from "./cardGroup"
import ImageLink from "./ImageLink.json"
import "./../../styles/restrauntList.css"

var CardComponent= [];
export default class CardList extends React.Component{
    constructor()
    {
        super();
    }
    componentWillMount(){
        var TempLink= [];
        var FinalLink= [];
        for(var i=1;i<ImageLink.ImageLink.length; i++)
        {
            if(i%3 != 0)
            {
             TempLink.push(ImageLink.ImageLink[i-1]);
            }
            else
            {
              TempLink.push(ImageLink.ImageLink[i-1]);  
              FinalLink.push(TempLink);
              TempLink = [];
           }
        }
        TempLink.push(ImageLink.ImageLink[i-1]);  
        FinalLink.push(TempLink);
    
        CardComponent = FinalLink.map((links)=>{
           return <li key={links}> <CardGroup ImageLink={links}/></li>
         })
    }
   render(){
        return(
         <Fragment>
         {CardComponent}
         </Fragment>
        )
    }
}
