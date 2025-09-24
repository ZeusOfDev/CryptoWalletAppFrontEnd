import React, { useState, useEffect } from "react";
import eth_icon from "../assets/singgleethicon.svg";
import { Outlet } from "react-router-dom";
import { Menu, X } from "lucide-react";

const NavIcon = () => (
  <div className="flex items-center justify-center">
    <img src={eth_icon} alt="Logo" className="h-6 w-6 rounded-full" />
  </div>
);

const Header = () => (
  <div className="p-7 flex bg-black">
    <h2 className="ml-7 text-white font-semibold">Crypto</h2>
  </div>
);

const Layout = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const menuItems = [
    { label: "Dashboard", icon: <NavIcon />, active: true },
    { label: "WithDraw", icon: <NavIcon /> },
    { label: "Deposits", icon: <NavIcon /> },
    { label: "Buy Miner", icon: <NavIcon /> },
    { label: "Settings", icon: <NavIcon /> },
    { label: "Profile", icon: <NavIcon /> },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsCollapsed(window.innerWidth < 1190);
    };

    handleResize(); // run once at mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`bg-[var(--component-bg-color)] text-white flex flex-col justify-between pt-12 pb-4 mx-4 rounded-2xl fixed top-1/2 -translate-y-1/2 transition-all duration-300
        ${isCollapsed ? "w-16" : "w-64"}`}
      >
        <div className="flex flex-col gap-4">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href="#"
              className={`flex items-center py-2 text-sm font-medium mx-3 rounded-2xl ${
                item.active
                  ? "bg-gradient-to-r from-indigo-700 to-fuchsia-700 text-white"
                  : "text-gray-300 hover:bg-gray-800"
              } ${isCollapsed ? "justify-center px-2" : ""}`}
            >
              <span className="mx-4 text-lg">{item.icon}</span>
              {!isCollapsed && item.label}
            </a>
          ))}
        </div>
        <div className="px-6">
          <a
            href="#"
            className={`flex items-center pt-8 pb-3 text-sm font-medium text-gray-300 hover:bg-gray-800 mt-20 rounded-2xl ${
              isCollapsed ? "justify-center px-2" : ""
            }`}
          >
            {!isCollapsed && "Log Out"}
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div
        className={`flex-1 transition-all duration-300 ${
          isCollapsed ? "ml-16" : "ml-64"
        }`}
      >
        <Header />
        <div className="flex justify-center items-start py-6">
          <div className="w-full max-w-6xl">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
