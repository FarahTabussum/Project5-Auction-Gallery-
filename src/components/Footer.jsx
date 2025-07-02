import React from "react";

function Footer() {
  return (
    <footer className="footer footer-center bg-base-200 p-10 gap-5 w-full flex flex-col">

      <div>
        <p className="font-bold text-2xl text-cyan-800">
          Auction<span className="text-yellow-400">Gallery</span>
        </p>
      </div>
      <nav className="grid grid-flow-col gap-4">
        <a className="link link-hover">Home</a>
        <a className="link link-hover">Auctions</a>
        <a className="link link-hover">Categories</a>
        <a className="link link-hover">How to works</a>
      </nav>
      <nav className="grid grid-flow-col gap-3">
        <a className="link link-hover">Bid.</a>
        <a className="link link-hover">Win.</a>
        <a className="link link-hover">Own.</a>
      </nav>
      <aside>
        <p className="whitespace-nowrap">© 2025 AuctionHub. All rights reserved.</p>
      </aside>
    </footer>
  );
}

export default Footer;