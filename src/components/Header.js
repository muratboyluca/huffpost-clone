import { Link } from "react-router-dom";
import logo from "../images/huffpost.png";
import NavLeft from "./NavLeft";

const Header = () => {
  return (
    <>
      <div className="Header">
        <NavLeft />
        <Link to="/">
          <img src={logo} className="nav-logo" alt="HUFFPOST" />
        </Link>
        <div className="nav-right">Right</div>
      </div>
    </>
  );
};

export default Header;
