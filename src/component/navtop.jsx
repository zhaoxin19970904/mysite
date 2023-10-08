import React, { Component } from 'react';

class Navigation extends Component {
  constructor() {
    super();
    this.state = {
      isDropdownOpen: false,
    };
  }

  toggleDropdown = () => {
    this.setState((prevState) => ({
      isDropdownOpen: !prevState.isDropdownOpen,
    }));
  };

  render() {
    const { isDropdownOpen } = this.state;

    return (
        <div className='navtop'>
      <nav className='top'>
        <ul>
          <li><a href="/home">Home</a></li>
          <li><a href="/about">About/Skill</a></li>
          <li><a href="/contact">Contact</a></li>
          
        </ul>
        
      </nav>
    
      <a className="menu-btn" onClick={this.toggleDropdown}>Menu</a>
      {isDropdownOpen && (
        <ul className="dropdown">
          <li><a href="/home">Home</a></li>
          <li><a href="/about">About/Skill</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/education">Education</a></li>
          <li><a href="/hobby">Hobby</a></li>
          <li><a href="/project">Projects</a></li>
          <li><a href="/work">Work and Reference</a></li>
        </ul>
      )}
    </div>
    );
  }
}

export default Navigation;