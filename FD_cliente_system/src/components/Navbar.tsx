import React from "react";
import "../assets/css/mainPage.css";
import {LogOut, Table} from "react-feather";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar_logo"><Table color='#ffffff' size="24" /></div>
      <ul className="navbar_links">
        <li><a href="/">LogOut  <LogOut color='#ffffff' size="24" /> </a></li>
      </ul>
    </nav>
  );
};

export default Navbar;