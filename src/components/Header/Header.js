import "./Header.css";
import headerImg from "../../images/mobile/image-header.jpg";
import arrowImg from "../../images/icon-arrow-down.svg";

function Header() {
  return (
    <div className="img-container">
      <img className="header-image" src={headerImg} alt="Orange" />
      <h1 className="header-title">we are creatives</h1>
      <img className="arrow" src={arrowImg} alt="" />
    </div>
  );
}

export default Header;
