import "./Header.css";
import headerImgMobile from "../../images/mobile/image-header.jpg";
import headerImgDesktop from "../../images/desktop/image-header.jpg";
import arrowImg from "../../images/icon-arrow-down.svg";

function Header() {
  return (
    <div className="img-container">
      <img className="header-image-mobile" src={headerImgMobile} alt="Orange" />
      <img
        className="header-image-desktop"
        src={headerImgDesktop}
        alt="Orange"
      />
      <h1 className="header-title">we are creatives</h1>
      <img className="arrow" src={arrowImg} alt="" />
    </div>
  );
}

export default Header;
