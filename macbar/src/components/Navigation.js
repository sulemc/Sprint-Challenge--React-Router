import React from 'react';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu } from 'reactstrap';
import { NavLink } from 'react-router-dom';

export default class Navigation extends React.Component {
    constructor(props) {
      super(props);
  
      this.toggle = this.toggle.bind(this);
      this.state = {
        dropdownOpen: false
      };
    }
  
    toggle() {
      this.setState({
        dropdownOpen: !this.state.dropdownOpen
      });
    }

render () {
  return (
    <div>
      <Nav tabs>
        <h1>Apple Store</h1>
        <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle nav caret>
             Macs
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>Types</DropdownItem>
              <NavLink to="Macs/silver">silver</NavLink>
              <DropdownItem to="Macs/gold">gold</DropdownItem>
              <DropdownItem to="Macs/platinum">platinum</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle nav caret>
             Phones
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>Types</DropdownItem>
              <DropdownItem>silver</DropdownItem>
              <DropdownItem>gold</DropdownItem>
              <DropdownItem>platinum</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <NavItem>
          <NavLink to="/Home">Home</NavLink>
        </NavItem>
          <NavItem>
          <NavLink activeClassName="nav-link--active" to="/Support">Support</NavLink>
        </NavItem>
        <NavItem>
          <NavLink activeClassName="nav-link--active" to="/Contact">Contact</NavLink>
        </NavItem>
      </Nav>
    </div>
  );
}
}