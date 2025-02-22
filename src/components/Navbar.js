import { useState } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { IconContext } from "react-icons";
import facebook from "../assets/icons/facebook.png";
import instagram from "../assets/icons/instagram.png";
import youtube from "../assets/icons/youtube.png";
import "../styles/Navbar.css";

function Navbar({ navigateToSection }) {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  const SidebarData = [
    { title: "HOME", sectionIndex: 0, cName: "nav-text" },
    { title: "ABOUT", sectionIndex: 1, cName: "nav-text" },
    { title: "PROJECTS", sectionIndex: 2, cName: "nav-text" },
    { title: "FUNDRAISERS", sectionIndex: 3, cName: "nav-text" },
    { title: "FOLLOW US", sectionIndex: 4, cName: "nav-text" }
  ];

  return (
    <div className="navbar-container">
      <IconContext.Provider value={{ color: "undefined" }}>
        <div className="navbar">
          <div className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </div>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => (
              <li key={index} className="nav-list-item" onClick={() => navigateToSection(item.sectionIndex)}>
                {item.icon}
                <span className="nav-text">{item.title}</span>
              </li>
            ))}
          </ul>
        </nav>
      </IconContext.Provider>

        <div className="socials-nav">
             <a href="https://www.facebook.com/redprojectborneo" target="_blank" rel="noopener noreferrer">
                <img src={facebook} alt="Facebook" className="social-icon"/>
            </a>
            <a href="https://www.instagram.com/redprojectborneo" target="_blank" rel="noopener noreferrer">
                <img src={instagram} alt="Instagram" className="social-icon"/>
            </a>
            <a href="https://www.youtube.com/@redprojectborneo1084" target="_blank" rel="noopener noreferrer">
                <img src={youtube} alt="YouTube" className="social-icon"/>
            </a>
        </div>
    </div>
  );
}

export default Navbar;
