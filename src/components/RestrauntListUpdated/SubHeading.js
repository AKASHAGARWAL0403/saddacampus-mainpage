import React from "react";
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem , Button } from 'reactstrap';

var divWidth = {
    "width"  :"100%"
}
var style = {
    "backgroundColor" : "white" ,
    "border" : "none",
    "color": "black",
    "boxShadow"  :"none"
}


export default class SubHeading extends React.Component{
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
      }
    
      toggle = ()=>{
        this.setState({
          isOpen : !this.state.isOpen
        });
      }
    
    render(){
        return(
            <div className="container Heading" >
            <div className="row">
            <div style={divWidth} ><div className="collegeName" >IIT(ISM) DHANBAD  <hr id="hr" /></div></div>
             <div className="Filters">
             <span>Restraunts</span>
            <ButtonDropdown isOpen={this.state.isOpen} toggle={this.toggle} className="buttongroup" >
            <Button id="caret" color="primary" className="dropdownButton"style={style} >All(7)</Button>
            <DropdownToggle caret color="primary" style={style} className="dropdownArrow" />
            <DropdownMenu>
                <DropdownItem>All</DropdownItem>
                <DropdownItem >Free Delivery</DropdownItem>
                <DropdownItem>Sort By Rating</DropdownItem>
                <DropdownItem>Sort By Min.Order</DropdownItem>
            </DropdownMenu>
            </ButtonDropdown>
             </div>
            </div>
            </div>
        )
    }
}