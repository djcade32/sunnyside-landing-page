import "./Navbar.css";
import hamburgerMenu from "../../images/icon-hamburger.svg";

function Navbar() {
  return (
    <div className="navbar-container">
      <h1 className="website-logo">sunnyside</h1>
      <img className="hamburger-menu" src={hamburgerMenu} alt="menu" />
    </div>
  );
}

export default Navbar;
