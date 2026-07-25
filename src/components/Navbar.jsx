import React from "react";

function Navbar() {
  return (
    <header>
      <div className="navbar bg-base-100 shadow-sm px-4 lg:px-10 py-3">
        {/* Left */}
        <div className="navbar-start">
          {/* Hamburger (Mobile Only) */}
          <div className="dropdown lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="no-underline">Home</a>
              </li>
              <li>
                <a className="no-underline">Auctions</a>
              </li>
              <li>
                <a className="no-underline">Categories</a>
              </li>
            </ul>
          </div>

          {/* Logo */}
          <a className="font-bold text-2xl lg:text-3xl text-cyan-800">
            Auction<span className="text-yellow-400">Gallery</span>
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-4 text-base">
            <li>
              <a className="no-underline">Home</a>
            </li>
            <li>
              <a className="no-underline">Auctions</a>
            </li>
            <li>
              <a className="no-underline">Categories</a>
            </li>
          </ul>
        </div>

        {/* Right Icons (Desktop Only) */}
        <div className="navbar-end hidden lg:flex gap-4 items-center">
          <button className="btn btn-ghost btn-circle shadow-md">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>

          <button className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                alt="Avatar"
              />
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
