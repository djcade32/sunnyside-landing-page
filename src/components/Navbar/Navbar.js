import "./Navbar.css";
import hamburgerMenu from "../../images/icon-hamburger.svg";

function Navbar() {
  return (
    <div className="navbar-container">
      <h1 className="website-logo">sunnyside</h1>
      <button className="hamburger-menu-button-wrapper">
        <img className="hamburger-menu" src={hamburgerMenu} alt="menu" />
      </button>
    </div>
  );
}

export default Navbar;
