import React from 'react';
import logo from './logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#40423f" }}>
      <a className="navbar-brand text-light" href="#">
        <img src={logo} alt="Logo" height="40" className="mr-2" />
        My Website
      </a>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <a className="nav-link text-light" href="#"></a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
