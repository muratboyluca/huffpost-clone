import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

const NavLeft = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
    // document.querySelector(".navbar").style.paddingLeft = "400px";
    // document.querySelector(".subnav-content").style.paddingLeft = "1000px";
  };

  return (
    <main>
      <div className="navbar">
        <Link to="#" className="menu-bars">
          <FaBars onClick={showSidebar} />
        </Link>
      </div>

      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <AiOutlineClose />
            </Link>
          </li>
          <li>
            <div to="/news" className="nav-text">
              <Link to="/news">
                <h2>NEWS</h2>
              </Link>
              <span></span>
              <Link to="/">U.S.News</Link>
              <Link to="/">Business</Link>
              <Link to="/">Health</Link>
              <Link to="/">Social Justice</Link>
              <Link to="/">World News</Link>
              <Link to="/">Environment</Link>
              <Link to="/">Coronavirus</Link>
            </div>
          </li>
          <li>
            <div className="nav-text">
              <Link to="/news/politics">
                <h2>POLITICS</h2>
              </Link>
              <span></span>
              <Link to="/">Joe Biden</Link>
              <Link to="/">Extremism</Link>
              <Link to="/">Congress</Link>
            </div>
          </li>
          <li>
            <div className="nav-text">
              <Link to="/entertainment">
                <h2>ENTERTAINMENT</h2>
              </Link>
              <span></span>
              <Link to="/">Culture & Arts</Link>
              <Link to="/">Celebrity</Link>
              <Link to="/">Media</Link>
              <Link to="/">TV & Film</Link>
            </div>
          </li>
          <li>
            <div className="nav-text">
              <Link to="/life">
                <h2>LIFE</h2>
              </Link>
              <span></span>
              <Link to="/">Style & Beauty</Link>
              <Link to="/">Parenting</Link>
              <Link to="/">Wellness</Link>
              <Link to="/">Money</Link>
              <Link to="/">Work/Life</Link>
              <Link to="/">Food & Drink</Link>
              <Link to="/">Travel</Link>
              <Link to="/">Relationship</Link>
              <Link to="/">Home & Livingl</Link>
              <Link to="/">Shopping</Link>
            </div>
          </li>
          <li>
            <div to="/" className="nav-text">
              <Link>
                <h2>COMMUNITIES</h2>
              </Link>
              <span></span>
              <Link to="/">Queer Voices</Link>
              <Link to="/">Black Voices</Link>
              <Link to="/">Asian Voices</Link>
              <Link to="/">Women</Link>
              <Link to="/">Latino Voices</Link>
            </div>
          </li>
          <li>
            <div to="/" className="nav-text">
              <Link>
                <h2>SPECIAL PROJECTS</h2>
              </Link>
              <span></span>
              <Link to="/">Highline</Link>
            </div>
          </li>
          <li>
            <div className="nav-text">
              <Link to="/personal">
                <h2>HUFFPOST PERSONAL</h2>
              </Link>
            </div>
          </li>
          <li>
            <div to="/" className="nav-text">
              <Link>
                <h2>VIDEO</h2>
              </Link>
            </div>
          </li>
          <li>
            <div to="/" className="nav-text">
              <Link>
                <h2>HOROSCOPES</h2>
              </Link>
            </div>
          </li>
          <li>
            <div to="/" className="nav-text">
              <Link>
                <h2>FROM OUR PARTNERS</h2>
              </Link>
              <span></span>
              <Link to="/">New Money Mindset</Link>
            </div>
          </li>
          <li>
            <div to="/" className="nav-text">
              <Link>
                <h2>NEWSLETTER</h2>
              </Link>
            </div>
          </li>
        </ul>
      </nav>
    </main>
  );
};

export default NavLeft;
