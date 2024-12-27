import React from "react";
import "../assets/css/mainPage.css";
import {LogOut} from "react-feather";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar_logo">My App</div>
      <ul className="navbar_links">
        <li><a href="/">LogOut  <LogOut color='#ffffff' size="24" /> </a></li>
      </ul>
    </nav>
  );
};

export default Navbar;