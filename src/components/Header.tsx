import React from "react";

const Header = () => {
  return (
    <header className="bg-[#1890ff] px-6 py-3 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-4">
        {/* Search Bar */}
        <div className="flex items-center bg-white rounded-full px-4 py-2 flex-1 max-w-2xl min-w-72 shadow-sm">
          {/* Search Icon */}
          <svg
            className="text-gray-500 mr-2"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>

          {/* Input */}
          <input
            type="text"
            placeholder="Search for products, businesses, or services..."
            className="flex-1 text-sm text-gray-700 outline-none placeholder-gray-500"
          />

          {/* Mic + Filter Icons */}
          <div className="flex items-center gap-2 border-l border-gray-200 pl-3">
            {/* Mic Icon */}
            <svg
              className="text-[#1890ff] cursor-pointer hover:opacity-80"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 1a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
              <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
              <line x1="12" y1="19" x2="12" y2="23" />
              <line x1="8" y1="23" x2="16" y2="23" />
            </svg>

            {/* Filter Icon */}
            <svg
              className="text-[#1890ff] cursor-pointer hover:opacity-80"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="4" y1="21" x2="4" y2="14" />
              <line x1="4" y1="10" x2="4" y2="3" />
              <line x1="12" y1="21" x2="12" y2="12" />
              <line x1="12" y1="8" x2="12" y2="3" />
              <line x1="20" y1="21" x2="20" y2="16" />
              <line x1="20" y1="12" x2="20" y2="3" />
              <line x1="1" y1="14" x2="7" y2="14" />
              <line x1="9" y1="8" x2="15" y2="8" />
              <line x1="17" y1="16" x2="23" y2="16" />
            </svg>

            {/* Divider */}
            <div className="border-l border-gray-200 h-5 mx-2"></div>

            {/* Dropdown */}
            <button className="flex items-center text-sm text-[#1890ff] font-medium hover:opacity-80">
              All Fields
              <svg
                className="ml-1"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
          </div>
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-6 text-white">
          {/* Heart */}
          <button className="hover:opacity-80 transition">
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.8a5.5 5.5 0 0 0 0-7.8z" />
            </svg>
          </button>

          {/* Gift */}
          <button className="hover:opacity-80 transition">
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="20 12 20 22 4 22 4 12" />
              <rect x="2" y="7" width="20" height="5" />
              <line x1="12" y1="22" x2="12" y2="7" />
              <path d="M12 7a3 3 0 1 1 3-3" />
              <path d="M12 7a3 3 0 1 0-3-3" />
            </svg>
          </button>

          {/* Cart */}
          <button className="hover:opacity-80 transition">
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
          </button>

          {/* Notification */}
          <button className="hover:opacity-80 transition">
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
              <path d="M13.73 21a2 2 0 0 1-3.46 0" />
            </svg>
          </button>

          {/* Account */}
          <button className="flex items-center gap-2 hover:opacity-80 transition">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            <span className="text-sm font-medium">My Account</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
