import React from "react"

function Banner() {
  return (

    
    <div
      className="hero min-h-screen relative  w-full"
      style={{
        backgroundImage: `url('https://i.ibb.co.com/VWb36cMk/real.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="hero-content text-white absolute left-0 top-1/2 transform -translate-y-1/2 p-4">
        <div className="px-10">
          <h1 className="mb-5 text-5xl font-semibold">
            Bid on Unique Items from
            <br /> Around the World
          </h1>
          <p className="mb-5 text-gray-400">
            Discover rare collectibles, luxury goods, and vintage
            <br />
            treasures in our curated auctions
          </p>
          <button className="btn btn-primary rounded-3xl px-5 bg-white text-black text-base hover:bg-sky-300 hover:text-white">
  Explore Auctions
</button>

        </div>
      </div>
    </div>
  );
}

export default Banner;