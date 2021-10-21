import "./Header.css";
import headerImg from "../../images/mobile/image-header.jpg";

function Header() {
  return (
    <div className="img-container">
      <img className="header-image" src={headerImg} alt="Orange" />
      <h1 className="header-title">we are creatives</h1>
    </div>
  );
}

export default Header;
