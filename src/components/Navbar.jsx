import React from "react";

function Navbar() {
  return (
    <header>
      <div class="navbar bg-base-100 shadow-sm px-10 py-3">
        <div class="navbar-start">
          <div class="dropdown font-poppins">
            <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabindex="0"
              class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li><a className="no-underline">Item 1</a></li>
              <li>
                <a className="no-underline">Parent</a></li>
              <li><a className="no-underline">Item 3</a></li>
            </ul>
          </div>
          <a class="font-bold text-3xl text-cyan-800">Auction<span class="text-yellow-400">Gallery</span></a>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal px-1 font-normal text-base gap-4 text-black">
            <li><a className="no-underline">Home</a></li>
            <li><a className="no-underline">Auctions</a></li>
            <li><a className="no-underline">Categories</a></li>
            <li><a className="no-underline">How to works</a></li>
          </ul>
        </div>
        <div class="navbar-end gap-4 items-center">
          <button class="btn btn-ghost btn-circle bg-grey-100 shadow-md m-0">
            <div class="indicator">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /> </svg>
              <span class="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>
          <button>
            <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
              <div class="w-10 rounded-full mb-2">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
          </button>
        </div>
      </div>

     


    </header>
  );
}

export default Navbar;
