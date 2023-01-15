import React, { useState, useCallback } from "react";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import { IconContext } from "react-icons";
import { IoLogoPolymer } from "react-icons/io";
import { FiLogOut } from "react-icons/fi";

// <FaIcons.FaBars onClick={showSidebar} />

function Navbar() {
  const navigate = useNavigate();
  const [sidebar, setSidebar] = useState(true);

  const showSidebar = () => setSidebar(true);

  const logOut = useCallback(() => {
    localStorage.removeItem("token");
    navigate("/login");
  });

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars a">
            <h3 className="test" onClick={showSidebar}>
              {" "}
              <IoLogoPolymer style={{ fontSize: "50px" }} />
              ORMVA
            </h3>
          </Link>

          <button type="button" className="logout" onClick={() => logOut()}>
            {" "}
            <FiLogOut className="tt" /> Se déconnecter
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
