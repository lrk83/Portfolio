import React, { Component } from 'react';
import {Menu, Dropdown} from "semantic-ui-react";
import { Link } from 'react-router-dom';

export default class AppNavbar extends Component {
  
  //Navbar active item
  state = { activeItem: '' }
  handleItemClick = ({ name }) => this.setState({ activeItem: name })
  render() {
    const { activeItem } = this.state

    var smallScreen=false;
    if (window.screen.width<=411){
      smallScreen=true;
    }

    return (
      <div className="big-nav">
        <Menu secondary>
          {smallScreen ? (<>
            <Menu.Item as={Link} to='/'>
          <h1 className="nav-title" id="nav-title">Lukas Keel</h1>
          </Menu.Item>
          <Menu.Menu position='right'>
            <Dropdown item icon="align justify">
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to='/projects'>Projects</Dropdown.Item>
                <Dropdown.Item as={Link} to='/portfolio'> Resume </Dropdown.Item>
                <Dropdown.Item as={Link} to='/resume' > Contact </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Menu>
          </>):(<>
          <Menu.Item as={Link} to='/'>
          <h1 className="nav-title" id="nav-title">Lukas Keel</h1>
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item
                name='Projects'
                active={activeItem === 'Projects'}
                onClick={this.handleItemClick}
                as={Link} to='/projects'
            />
            <Menu.Item
                name='Resume'
                active={activeItem === 'Resume'}
                onClick={this.handleItemClick}
                as={Link} to='/resume'
            /><Menu.Item
            name='Contact'
            active={activeItem === 'Contact'}
            onClick={this.handleItemClick}
            as={Link} to='/contact'
            />
            </Menu.Menu>
          </>)}
        </Menu>
      </div>
    )
  }
}
