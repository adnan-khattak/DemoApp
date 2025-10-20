import React from "react";
import { Link } from "react-router-dom";
import {
  HiOutlineHeart,
  HiOutlineBell,
  HiOutlineUser,
  HiOutlineGift,
  HiOutlineShoppingCart,
  HiOutlineMicrophone,
  HiOutlineFunnel,
  HiOutlineMagnifyingGlass,
  HiOutlineChevronDown,
} from "react-icons/hi2";
import logo from "../../public/logo.png"

const Header = () => {
  return (
    <header className="bg-[#2699FB] px-4 sm:px-6 py-1 shadow-md">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between sm:hidden">
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 text-white hover:opacity-80 transition">
              <HiOutlineUser size={20} />
              <span className="text-sm font-medium">My Account</span>
            </button>
          </div>

          {/* Right Icons for Mobile */}
          <div className="flex items-center gap-4 text-white">
            <button className="hover:opacity-80 transition">
              <HiOutlineHeart size={22} />
            </button>
            <button className="hover:opacity-80 transition">
              <HiOutlineShoppingCart size={22} />
            </button>
            <button className="hover:opacity-80 transition">
              <HiOutlineBell size={22} />
            </button>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden sm:flex items-center justify-between flex-wrap gap-4">
          <img src={logo} alt="" className="w-[50px] h-[50px]"/>
          {/* Search Bar */}
          <div className="flex items-center bg-white rounded-full px-4 py-2 flex-1 max-w-2xl min-w-72 shadow-sm">
            {/* Search Icon */}
            <HiOutlineMagnifyingGlass className="text-gray-500 mr-2" size={20} />

            {/* Input */}
            <input
              type="text"
              placeholder="Search for products, businesses, or services..."
              className="flex-1 text-sm text-gray-700 outline-none placeholder-gray-500"
            />

            <div className="flex items-center gap-2 border-l border-gray-200 pl-3">
              <HiOutlineMicrophone
                className="text-[#1890ff] cursor-pointer hover:opacity-80"
                size={18}
              />
              <HiOutlineFunnel
                className="text-[#1890ff] cursor-pointer hover:opacity-80"
                size={18}
              />

              {/* Divider */}
              <div className="border-l border-gray-200 h-5 mx-2"></div>

              <button className="flex items-center text-sm text-[#1890ff] font-medium hover:opacity-80">
                All Fields
                <HiOutlineChevronDown className="ml-1" size={14} />
              </button>
            </div>
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-6 text-white">
            <button className="hover:opacity-80 transition">
              <HiOutlineHeart size={22} />
            </button>
            <button className="hover:opacity-80 transition">
              <HiOutlineGift size={22} />
            </button>

            <button className="hover:opacity-80 transition">
              <HiOutlineShoppingCart size={22} />
            </button>

            <button className="hover:opacity-80 transition">
              <HiOutlineBell size={22} />
            </button>

            <button className="flex items-center gap-2 hover:opacity-80 transition">
              <HiOutlineUser size={20} />
              <span className="text-xs font-semibold">My Account</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
