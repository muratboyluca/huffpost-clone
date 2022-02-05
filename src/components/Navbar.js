import { Link } from "react-router-dom";
import "../index.css";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [headerWidth, setHeaderWith] = useState("  40px;");

  const listenScrollEvent = () => {
    window.scrollY > 10 ? setHeaderWith("0") : setHeaderWith("40px");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (
    <nav className="subnav-content" style={{ top: headerWidth }}>
      <div className="nav-items">
        <Link className="nav-item" to="/news">
          NEWS
        </Link>
        <Link className="nav-item" to="/news/politics">
          POLITICS
        </Link>
        <Link className="nav-item" to="/entertainment">
          ENTERTAINMENT
        </Link>
        <Link className="nav-item" to="/life">
          LIFE
        </Link>
        <Link className="nav-item" to="/personal">
          PERSONAL
        </Link>
        <Link className="nav-item" to="/shopping">
          SHOPPING
        </Link>
        <Link className="nav-item" to="/video">
          VIDEO
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
