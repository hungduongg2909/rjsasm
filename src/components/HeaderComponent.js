import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
      super(props);
  
      this.state = {
          isNavOpen: false
        };

      this.toggleNav = this.toggleNav.bind(this);

    }

    toggleNav() {
      this.setState({
        isNavOpen: !this.state.isNavOpen
      });
    }


  render() {
      return(
          <React.Fragment>
                <div>
                    <Navbar dark expand="md">
                        <div className="container">
                            <NavbarToggler onClick={this.toggleNav} />
                            <NavbarBrand className="mr-auto" href="/home"><img src='assets/images/logo.png' height="30" width="41" alt='Ristorante Con Fusion' /></NavbarBrand>
                            <Collapse className="custom_btnLogin" isOpen={this.state.isNavOpen} navbar>
                                <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link"  to='/home'><span className="fa fa-list fa-lg"></span> Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/department'><span className="fa fa-info fa-lg"></span> Department</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/salary'><span className="fa fa-address-card fa-lg"></span> Salary</NavLink>
                                </NavItem>
                                </Nav>
                            </Collapse>
                        </div>
                    </Navbar>
                    
                </div>

                
          </React.Fragment>
      );
  }
}

export default Header;