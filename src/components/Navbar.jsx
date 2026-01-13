import { NavLink, Link } from "react-router-dom";
import { assets } from "../assets/assets";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  // Disable background scroll when sidebar is open
  useEffect(() => {
    document.body.style.overflow = visible ? "hidden" : "auto";
  }, [visible]);

  return (
    <div className="relative flex items-end justify-between font-medium border-b-2 pb-4 border-b-slate-400">
      
      {/* Logo + Company Name */}
      <div className="flex flex-row items-center gap-4">
        <Link to="/">
          <img className="w-20 mt-4" src={assets.logo} alt="logo" />
        </Link>
        <h1 className="text-2xl mt-4 hidden lg:block text-white">
          Altocumulus Technologies Private Limited
        </h1>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 lg:gap-8 text-base text-gray-500">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p><i className="bi bi-house-fill mr-2"></i>HOME</p>
        </NavLink>

        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p><i className="bi bi-file-person mr-2"></i>ABOUT</p>
        </NavLink>

        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p><i className="bi bi-telephone-fill mr-2"></i>CONTACT</p>
        </NavLink>
      </ul>

      {/* Mobile Hamburger */}
      <img
        onClick={() => setVisible(true)}
        className="w-6 cursor-pointer md:hidden"
        src={assets.menu_icon}
        alt="menu"
      />

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 bg-white transition-all duration-300 ${
          visible ? "w-full" : "w-0"
        } overflow-hidden`}
      >
        <div className="flex flex-col text-gray-800">
          
          {/* Back Button */}
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-4 cursor-pointer"
          >
            <img
              className="h-4 rotate-180"
              src={assets.dropdown_icon}
              alt="back"
            />
            <p className="text-gray-400">BACK</p>
          </div>

          <Link onClick={() => setVisible(false)} className="py-3 pl-6 border" to="/">
            HOME
          </Link>

          <Link onClick={() => setVisible(false)} className="py-3 pl-6 border" to="/about">
            ABOUT
          </Link>

          <Link onClick={() => setVisible(false)} className="py-3 pl-6 border" to="/contact">
            CONTACT
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
