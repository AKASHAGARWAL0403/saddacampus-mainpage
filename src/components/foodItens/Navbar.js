import React, { Fragment } from 'react';
import "./../../styles/NavbarComponent.css";
//import "./../../styles/NavbarDemo.css";
import classie from "./classie"
import FoodItemsList from "./FoodItemsGroup"
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import {faBars} from "@fortawesome/fontawesome-free-solid"
import { HashLink as Link } from 'react-router-hash-link';
import data from "./../links.json";

var style = {
    "color" : "black",
}
var NavbarLinks = {
    "color" : "#bdbdbd"
}

var menuBar = [];
class Navbar extends React.Component{
    constructor(props){
      super(props);
      console.log(classie);
      this.menuEl = React.createRef();
      this.closeMenuCtrl = React.createRef();
      this.openMenuCtrl = React.createRef();
}
    openMenu = ()=>{
        classie.add(this.menuEl.current , 'menu--open');
        this.closeMenuCtrl.current.focus();
    }
    
    closeMenu = ()=>{
        classie.remove(this.menuEl.current , 'menu--open');
        this.openMenuCtrl.current.focus();
    }
    componentWillMount(){
        menuBar = data.categories.map((res)=>{
            var location = "/navbar#"+res.Category;
            return  <li className="menu__item" role="menuitem"><span className="menu__link" datasubmenu="submenu-1" aria-owns="submenu-1" onClick={this.closeMenu}> <Link to={location}  style={NavbarLinks}>{res.Category}</Link></span></li>
        })
    }
    render(){
       
        return(
            <Fragment>
            <button className="action action--open" aria-label="Open Menu" ref={this.openMenuCtrl} onClick={this.openMenu}  style={style} ><FontAwesomeIcon icon={faBars} /></button>
            <div className="container" id="parent_">
            <nav id="ml-menu" className="menu" ref={this.menuEl} >
                <button className="action action--close" aria-label="Close Menu"  ref={this.closeMenuCtrl} onClick={this.closeMenu} >close</button>
                <div className="menu__wrap">
                    <ul datamenu="main" className="menu__level" tabIndex="-1" role="menu" aria-label="All">
                      {menuBar}
                    </ul>
                </div>
            </nav>
            <FoodItemsList />
        </div>
        </Fragment>
        )
    }
}
  


export default Navbar