import React from "react";
import "../assets/css/mainPage.css";
import {LogOut, Table} from "react-feather";
import imagen from '../assets/imgs/logo.png';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar_logo"><Table color='#ffffff' size="24" /></div>
      <img 
          src={imagen}
          alt="Icono" 
          className="navbar_icon" 
          style={{ width: '200px', height: '50px', margin: '0 8px' }} 
        />
      <ul className="navbar_links">
        <li><a href="/">LogOut  <LogOut color='#ffffff' size="24" /> </a></li>
      </ul>
    </nav>
  );
};

export default Navbar;