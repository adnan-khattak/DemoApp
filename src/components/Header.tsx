import React from "react";
import {
  FaSearch,
  FaMicrophone,
  FaFilter,
  FaHeart,
  FaGift,
  FaShoppingCart,
  FaBell,
  FaUser,
  FaChevronDown,
} from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-[#2699FB] px-4 sm:px-6 py-3 shadow-md">
      <div className="max-w-7xl mx-auto">
        {/* Mobile Layout */}
        <div className="flex items-center justify-between sm:hidden">
          {/* My Account on Left for Mobile */}
          <button className="flex items-center gap-2 text-white hover:opacity-80 transition">
            <FaUser size={18} />
            <span className="text-sm font-medium">My Account</span>
          </button>

          {/* Right Icons for Mobile */}
          <div className="flex items-center gap-4 text-white">
            <button className="hover:opacity-80 transition">
              <FaHeart size={20} />
            </button>
            <button className="hover:opacity-80 transition">
              <FaShoppingCart size={20} />
            </button>
            <button className="hover:opacity-80 transition">
              <FaBell size={20} />
            </button>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden sm:flex items-center justify-between flex-wrap gap-4">
          {/* Search Bar */}
          <div className="flex items-center bg-white rounded-full px-4 py-2 flex-1 max-w-2xl min-w-72 shadow-sm">
            {/* Search Icon */}
            <FaSearch className="text-gray-500 mr-2" size={18} />

            {/* Input */}
            <input
              type="text"
              placeholder="Search for products, businesses, or services..."
              className="flex-1 text-sm text-gray-700 outline-none placeholder-gray-500"
            />

            {/* Mic + Filter + Dropdown */}
            <div className="flex items-center gap-2 border-l border-gray-200 pl-3">
              <FaMicrophone
                className="text-[#1890ff] cursor-pointer hover:opacity-80"
                size={16}
              />
              <FaFilter
                className="text-[#1890ff] cursor-pointer hover:opacity-80"
                size={16}
              />

              {/* Divider */}
              <div className="border-l border-gray-200 h-5 mx-2"></div>

              {/* Dropdown */}
              <button className="flex items-center text-sm text-[#1890ff] font-medium hover:opacity-80">
                All Fields
                <FaChevronDown className="ml-1" size={12} />
              </button>
            </div>
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-6 text-white">
            <button className="hover:opacity-80 transition">
              <FaHeart size={20} />
            </button>

            <button className="hover:opacity-80 transition">
              <FaGift size={20} />
            </button>

            <button className="hover:opacity-80 transition">
              <FaShoppingCart size={20} />
            </button>

            <button className="hover:opacity-80 transition">
              <FaBell size={20} />
            </button>

            <button className="flex items-center gap-2 hover:opacity-80 transition">
              <FaUser size={18} />
              <span className="text-sm font-medium">My Account</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
