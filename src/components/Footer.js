import { Link } from "react-router-dom";
import logo from "../images/huffpost.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <Link to="/">
          <img src={logo} className="nav-logo" alt="HUFFPOST" />
        </Link>
      </div>
      <div className="flex">
        <div className="column">
          <Link className="site-footer-link">NEWS</Link>
          <Link className="site-footer-link">ENTERTAINMENT</Link>
          <Link className="site-footer-link">COMMUNITIES</Link>
          <Link className="site-footer-link">VIDEO</Link>
        </div>
        <div className="column">
          <Link className="site-footer-link">POLITICS</Link>
          <Link className="site-footer-link">LIFE</Link>
          <Link className="site-footer-link">HUFFPOST PERSONAL</Link>
          <Link className="site-footer-link">NEWSLETTER</Link>
        </div>
      </div>
      <div className="flex">
        <div className="column">
          <Link className="site-footer-link corp">HUFFPOST</Link>
          <Link className="site-footer-link corp">ADVERTISE</Link>
          <Link className="site-footer-link corp">RSS</Link>
          <Link className="site-footer-link corp">CAREERS</Link>
          <Link className="site-footer-link corp">USER AGREEMENT</Link>
          <Link className="site-footer-link corp">HUFFPOST PRESS ROOM</Link>
          <Link className="site-footer-link corp">DMCA POLICY</Link>
        </div>
        <div className="column">
          <Link className="site-footer-link corp">ABOUT US</Link>
          <Link className="site-footer-link corp">CONTACT US</Link>
          <Link className="site-footer-link corp">FAQ</Link>
          <Link className="site-footer-link corp">ARCHIVE</Link>
          <Link className="site-footer-link corp">COMMENT POLICY</Link>
          <Link className="site-footer-link corp">PRIVACY POLICY</Link>
          <Link className="site-footer-link corp">CONSENT PREFERENCES</Link>
        </div>
      </div>
      <hr></hr>
      <div className="copyright">
        <div class="copyright">
          Part of HuffPost News. ©2022 BuzzFeed, Inc. All rights reserved.
        </div>
        <div className="copyright branding">The Huffington Post</div>
      </div>
    </footer>
  );
};

export default Footer;
