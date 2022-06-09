import React, { Component, createContext } from 'react';
import { Navbar, NavbarBrand, Alert, Nav, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
      super(props);
  
      this.toggleNav = this.toggleNav.bind(this);
      this.state = {
        isNavOpen: false
      };
    }

    toggleNav() {
      this.setState({
        isNavOpen: !this.state.isNavOpen
      });
    }

  render() {

      return(
          <div>
              <Navbar dark expand="md">
                  <div className="container">
                      <NavbarToggler onClick={this.toggleNav} />

                      <div className="nav-bar">
                        <NavbarBrand className="mr-auto" href="/"><img src='assets/images/logo.png' height="30" width="41" alt='Ristorante Con Fusion' /></NavbarBrand>

                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link"  to='/home'><span className="fa fa-list fa-lg"></span> Nhân viên</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link"  to='/department'><span className="fa fa-home fa-lg"></span> Phòng ban</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/salary'><span className="fa fa-address-card fa-lg"></span> Bảng lương</NavLink>
                            </NavItem>
                            </Nav>
                        </Collapse>
                      </div>
                  </div>
              </Navbar>
          </div>
      );
  }
}

export default Header;