import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

const style = {
    "width" : "10%",
}
const NavItemPadding = {
	"paddingRight"  : "20px"
}
const NavFixed = {
	"width" : "100%",
	"position" : "fixed",
	"z-index" : "99"
}

export default class Header extends React.Component {
	constructor(){
		super();
		this.state = { isOpen: false };
	}
	toggle = () => {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}
	render(){
		return (
			<div style={NavFixed} >  
				<Navbar color="light" light expand="lg" className="bg-white border-bottom">
					<div className="container">
						<NavbarBrand href="/">
							<img src="/assets/images/brand/16-9.png" style={style} className="d-inline-block align-top" alt="" />
							&nbsp; Saddacampus
						</NavbarBrand>
						<NavbarToggler onClick={this.toggle} />
						<Collapse isOpen={this.state.isOpen} navbar>
							<Nav className="ml-auto" navbar>
								<NavItem style={NavItemPadding} >
                        		<p>Profile    </p>
								</NavItem>
								<NavItem>
                        		<p>Setting</p>
								</NavItem>
							</Nav>
						</Collapse>
					</div>
				</Navbar>
			</div>
		);
	}
}
