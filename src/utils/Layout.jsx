import React from "react";
import eth_icon from "../assets/singgleethicon.svg";
import FlowerLogo from "../feature/FlowerLogo";
import { Outlet } from "react-router-dom";

const NavIcon = () => {
  return (
    <div className="flex items-center justify-center">
      <img src={eth_icon} alt="Logo" className="h-8 w-8 rounded-full" />
    </div>
  );
};
const Footer = () => {
  return <div className="h-200"></div>;
};
const Header = () => {
  return (
    <div className="p-7 flex bg-black">
      <div></div>
      <h2 className="ml-7">Crypto</h2>
    </div>
  );
};
const Layout = () => {
  const menuItems = [
    { label: "Dashboard", icon: <NavIcon />, active: true },
    { label: "WithDraw", icon: <NavIcon /> },
    { label: "Deposits", icon: <NavIcon /> },
    { label: "Buy Miner", icon: <NavIcon /> },
    { label: "Settings", icon: <NavIcon /> },
    { label: "Profile", icon: <NavIcon /> },
  ];

  return (
    <div>
      <div className="min-w-72 w-72 bg-[var(--component-bg-color)] text-white flex flex-col justify-between pt-12 pb-4 mx-4 rounded-2xl fixed top-1/2 -translate-y-1/2">
          <div className="flex flex-col gap-4">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href="#"
                className={`flex items-center px-6 py-2 text-sm font-medium mx-3 ${
                  item.active
                    ? "bg-gradient-to-r from-indigo-700 to-fuchsia-700 rounded-2xl text-white"
                    : "text-gray-300 hover:bg-gray-800"
                }`}
              >
                <span className="mx-4 text-lg">{item.icon}</span>
                {item.label}
              </a>
            ))}
          </div>
          <div className="px-6">
            <a
              href="#"
              className="flex items-center pt-8 pb-3 text-sm font-medium text-gray-300 hover:bg-gray-800 mt-20"
            >
              <div className="mr-3 text-lg" />
              Log Out
            </a>
          </div>
        </div>
      <Header />
      <div className="flex py-2 gap-[1.5%] items-center justify-center">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
