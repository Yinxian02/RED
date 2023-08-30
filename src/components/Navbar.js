import React, { useState } from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "../App.css";
import { IconContext } from "react-icons";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "undefined" }}>
          <div className="navbar">
            <Link to="#" className="menu-bars">
              <FaIcons.FaBars onClick={showSidebar} />
            </Link>
          </div>
          <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
            <ul className="nav-menu-items" onClick={showSidebar}>
              <li className="navbar-toggle">
                <Link to="#" className="menu-bars">
                  <AiIcons.AiOutlineClose />
                </Link>
              </li>
              {SidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </IconContext.Provider>
    </>
  );
};

export default Navbar;

// <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      // <div>
      //   {/* menu */}
      //   {/* <ul className='hidden md:flex'> */}
      //   <ul>
      //     <li>
      //       {/* <Link to='home' smooth={true} duration={500}>
      //         Home
      //       </Link> */}
      //       <a href='/'>Home</a>
      //     </li>
      //     <li>
      //       <a href='/about'>About</a>
      //     </li>
      //     <li>
      //       <a href='/past-projects'>Past Projects</a>
      //     </li>
      //     <li>
      //       <a href='/fundraisers'>Fundraisers</a>
      //     </li>
      //     <li>
      //       <a href='/rgb-school'>RGB School</a>
      //     </li>
      //     <li>
      //       <a href='/join-us'>Join Us</a>
      //     </li>
      //     <li>
      //       <a href='/follow-us'>Follow Us</a>
      //     </li>
      //   </ul>

      // </div>