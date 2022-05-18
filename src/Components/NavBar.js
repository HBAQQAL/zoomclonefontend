import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import { IconContext } from "react-icons";
import { IoLogoClosedCaptioning } from "react-icons/io";
import { FiLogOut } from "react-icons/fi";

// <FaIcons.FaBars onClick={showSidebar} />

function Navbar() {
  const [sidebar, setSidebar] = useState(true);

  const showSidebar = () => setSidebar(sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <h3
              style={{
                color: "#fff",
                display: "flex",
                alignItems: "center",

                textDecoration: "none",
              }}
              onClick={showSidebar}
            >
              <IoLogoClosedCaptioning style={{ fontSize: "50px" }} />
            </h3>
          </Link>

          <button type="button" className="logout">
            {" "}
            <FiLogOut className="tt" /> Log Out
          </button>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li></li>
            <li></li>
            <li></li>
            <li></li>

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
}

export default Navbar;
