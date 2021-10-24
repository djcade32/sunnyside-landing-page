import "./Navbar.css";
import hamburgerMenu from "../../images/icon-hamburger.svg";
import { useState } from "react";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  function handleMobileMenuClick() {
    setShowMenu(!showMenu);
  }
  return (
    <div className="navbar-container">
      <div className="navbar-container-mobile">
        <h1 className="website-logo">sunnyside</h1>
        <button
          onClick={handleMobileMenuClick}
          className="hamburger-menu-button-wrapper"
        >
          <img className="hamburger-menu" src={hamburgerMenu} alt="menu" />
        </button>
      </div>
      {showMenu && (
        <div className="navbar-menu">
          <div className="navbar-menu-links">
            <p className="navbar-menu-link">About</p>
            <p className="navbar-menu-link">Services</p>
            <p className="navbar-menu-link">Projects</p>
            <button className="navbar-menu-button">Contact</button>
          </div>
        </div>
      )}
      <div className="navbar-container-desktop">
        <h1 className="website-logo">sunnyside</h1>
        <div className="nav-links">
          <p className="nav-link">About</p>
          <p className="nav-link">Services</p>
          <p className="nav-link">Projects</p>
          <button className="contact-button">Contact</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
