import React, { useContext, useState } from "react";
import { assets } from "..//assets/frontend_assets/assets";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const NavBar = () => {
  const [visible, setVisible] = useState(false);
  const { setShowSearch, getCartCount } = useContext(ShopContext);

  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <Link to={"/"}>
        {" "}
        <img src={assets.logo} alt="logo" className="w-36" />
      </Link>
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink className="flex flex-col items-center gap-1" to="/">
          <p>HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink className="flex flex-col items-center gap-1" to="/collections">
          <p>COLLECTIONS</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink className="flex flex-col items-center gap-1" to="/about">
          <p>ABOUT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink className="flex flex-col items-center gap-1" to="/contact">
          <p>CONTACT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>

      <div className="flex items-center gap-6">
        <img
          src={assets.search_icon}
          alt="search_icon"
          className="w-5 cursor-pointer"
          onClick={() => setShowSearch(true)}
        />
        <div className="group relative">
       <Link to={'/login'}>   <img
            src={assets.profile_icon}
            className="w-5 cursor-pointer"
            alt="profile_icon"
          /></Link>
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>
        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} className="w-5 min-w-5" alt="cart_icon" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            {getCartCount()}
          </p>
        </Link>

        <img
          src={assets.menu_icon}
          className="w-5 cursor-pointer sm:hidden"
          alt="menu_icon"
          onClick={() => setVisible(true)}
        />
      </div>

      {/* sidebar menu for small screen */}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
          visible === true ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600 ">
          <div
            className="flex items-center gap-4 p-3 cursor-pointer"
            onClick={() => setVisible(false)}
          >
            <img
              src={assets.dropdown_icon}
              className="h-4 rotate-180"
              alt="dropdown_menu"
            />
            <p>Back</p>
          </div>
          <NavLink
            to="/"
            className="py-2 pl-6 border"
            onClick={() => setVisible(false)}
          >
            HOME
          </NavLink>
          <NavLink
            to="/collections"
            className="py-2 pl-6 border"
            onClick={() => setVisible(false)}
          >
            COLLECTIONS
          </NavLink>
          <NavLink
            to="/about"
            className="py-2 pl-6 border"
            onClick={() => setVisible(false)}
          >
            ABOUT
          </NavLink>
          <NavLink
            to="/contact"
            className="py-2 pl-6 border"
            onClick={() => setVisible(false)}
          >
            CONTACT
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

//when we open up the console , we will see a "active" class on the specific route that we have selected in the Navbar
//specific feature of the NavLink tag hidden
