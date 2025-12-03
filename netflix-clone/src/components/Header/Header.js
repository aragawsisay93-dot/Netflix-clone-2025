import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../Assets/Images/netflix-logo.png";

import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function Header() {
  return (
    <header className="header">
      {/* Logo */}
      <img src={logo} alt="Netflix Logo" className="logo" />

      {/* LEFT SIDE MENU */}
      <nav className="nav-left">
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
        </ul>
      </nav>

      {/* RIGHT SIDE */}
      <div className="nav-right">
        <SearchIcon className="icon" />
        <NotificationsIcon className="icon" />
        <AccountBoxIcon className="icon" />
        <KeyboardArrowDownIcon className="icon" />
        <Link to="/signin">
          <button className="signin-btn">Sign In</button>
        </Link>
      </div>
    </header>
  );
}


export default Header;
