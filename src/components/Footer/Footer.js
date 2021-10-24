import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <h1 className="footer-header">sunnyside</h1>
      <div className="links">
        <p className="link">About</p>
        <p className="link">Services</p>
        <p className="link">Projects</p>
      </div>
      <div className="social-links">
        <i className="fab fa-facebook-square fa-2x"></i>
        <i className="fab fa-instagram fa-2x"></i>
        <i className="fab fa-pinterest fa-2x"></i>
        <i className="fab fa-twitter fa-2x"></i>
      </div>
    </div>
  );
}

export default Footer;
