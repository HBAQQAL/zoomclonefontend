import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import { SiGooglemeet } from "react-icons/si";
import { CgProfile } from "react-icons/cg";
import { MdNotificationsActive } from "react-icons/md";

export const SidebarData = [
  {
    title: "Tableau de bord",
    path: "/dashbord",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Réunions",
    path: "/Meetings",
    icon: <SiGooglemeet />,
    cName: "nav-text",
  },

  {
    title: "Notifications",
    path: "/Notifications",
    icon: <MdNotificationsActive />,
    cName: "nav-text",
  },
  {
    title: "Profile",
    path: "/Profile",
    icon: <CgProfile />,
    cName: "nav-text",
  },
  {
    title: "Assistance",
    path: "/support",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
  },
];
