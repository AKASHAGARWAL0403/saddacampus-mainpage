import React, { Fragment } from 'react';
import "./../../styles/NavbarComponent.css";
//import "./../../styles/NavbarDemo.css";
import classie from "./classie"
import Layout from "./../RestrauntList/FinalLayout"
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import {faBars} from "@fortawesome/fontawesome-free-solid"


var style = {
    "color" : "black",
   
     
}

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
    render(){
       
        return(
            <Fragment>
            <button className="action action--open" aria-label="Open Menu" ref={this.openMenuCtrl} onClick={this.openMenu}  style={style} ><FontAwesomeIcon icon={faBars} /></button>
            <div className="container">
            <nav id="ml-menu" className="menu" ref={this.menuEl} >
                <button className="action action--close" aria-label="Close Menu"  ref={this.closeMenuCtrl} onClick={this.closeMenu} >close</button>
                <div className="menu__wrap">
                    <ul datamenu="main" className="menu__level" tabIndex="-1" role="menu" aria-label="All">
                        <li className="menu__item" role="menuitem"><a className="menu__link" datasubmenu="submenu-1" aria-owns="submenu-1" href="#" onClick={this.closeMenu}>Vegetables</a></li>
                        <li className="menu__item" role="menuitem"><a className="menu__link" datasubmenu="submenu-2" aria-owns="submenu-2" href="#" onClick={this.closeMenu}>Fruits</a></li>
                        <li className="menu__item" role="menuitem"><a className="menu__link" datasubmenu="submenu-3" aria-owns="submenu-3" href="#" onClick={this.closeMenu}>Grains</a></li>
                        <li className="menu__item" role="menuitem"><a className="menu__link" datasubmenu="submenu-4" aria-owns="submenu-4" href="#" onClick={this.closeMenu}>Mylk &amp; Drinks</a></li>
                    </ul>
                </div>
            </nav>
            <div className="content" >
			<p className="info"></p>
			  <Layout />
		</div>
        </div>
        </Fragment>
        )
    }
}
  


export default Navbar