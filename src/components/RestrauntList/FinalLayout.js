import React, { Fragment } from "react";
import List from "./CardList";
import Restraunt from "./restrauntBackground"
import "./../../styles/restrauntList.css"
import ImageLink from "./ImageLink.json"
const Layout = (props)=>(
    <Fragment>
        <Restraunt ImageLink={ImageLink} />
        <List history={props.history} ImageLink={ImageLink} />
    </Fragment>   

)

export default Layout;