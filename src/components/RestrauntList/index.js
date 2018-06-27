import React from "react";
import ImageLink from "./ImageLink.json"
import FinalLayout from "./FinalLayout"

export default class index extends React.Component{
    render(){
        return(
            <FinalLayout ImageLink={ImageLink}/>
        )
    }
}


