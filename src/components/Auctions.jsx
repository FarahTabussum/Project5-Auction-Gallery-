import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Auctions = () => {
  const [items, setItems] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetch("/bids.json")
      .then(res => res.json())
      .then(data => setItems(data))
      .catch(err => console.error("Error loading bids.json:", err));
  }, []);

  const isFavorite = (id) => favorites.some(fav => fav.id === id);

  const addToFavorites = (item) => {
    if (!isFavorite(item.id)) {
      setFavorites([...favorites, item]);
      toast.success(`${item.title} added to favorites`);
    }
  };

  const removeFromFavorites = (id) => {
    const removedItem = favorites.find(item => item.id === id);
    setFavorites(favorites.filter(item => item.id !== id));
    if (removedItem) {
      toast.error(`${removedItem.title} removed from favorites`);
    }
  };

  const totalBidAmount = favorites.reduce((sum, item) => sum + item.currentBidPrice, 0);

  return (
    <div className="px-8 pt-14 bg-[#f1f5f9] min-h-screen">
      <h2 className="text-3xl font-bold mt-5 mb-2 text-gray-800">Active Auctions</h2>
      <p className="mb-6 text-base text-gray-900">Discover and bid on extraordinary items</p>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Auction Table */}
        <div className="flex-1 bg-white shadow rounded-lg overflow-auto">
          <table className="table w-full min-w-[600px]">
            <thead>
              <tr>
                <th>Items</th>
                <th>Current Bid</th>
                <th>Time Left</th>
                <th>Bid Now</th>
              </tr>
            </thead>
            <tbody>
              {items.map(item => {
                const favorite = isFavorite(item.id);
                return (
                  <tr key={item.id}>
                    <td className="flex items-center gap-3 py-2">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-10 h-10 object-cover rounded"
                      />
                      <span className="font-medium">{item.title}</span>
                    </td>
                    <td>${item.currentBidPrice}</td>
                    <td>{item.timeLeft}</td>
                    <td>
                      <button
                        onClick={() => addToFavorites(item)}
                        disabled={favorite}
                        className={`text-xl transition-colors duration-200 ${
                          favorite
                            ? "text-red-600 cursor-not-allowed"
                            : "text-gray-600 hover:text-red-500 cursor-pointer"
                        }`}
                      >
                        {favorite ? "❤️" : "🤍"}
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Favorites Section */}
        <div className="w-full text-center lg:w-[350px] bg-white p-5 rounded-lg shadow flex-shrink-0">
          <h3 className="text-lg font-semibold mb-4">❤️ Favorite Items</h3>
          {favorites.length === 0 ? (
            <div className="text-sm text-gray-900 mb-4">
              No favorites yet<br />
              <span className="text-xs">Click the heart icon to add an item</span>
            </div>
          ) : (
            <ul className="space-y-3">
              {favorites.map(item => (
                <li key={item.id} className="flex items-start gap-3 text-sm border-b pb-2 gap-2">
                  <img src={item.image} alt={item.title} className="w-12 h-12 object-cover rounded" />
                  <div className="flex-1">
                    <p className="font-medium">{item.title}</p>
                    {/* Display current bid below the title */}
                    <div className="flex flex-row gap-6 justify-center">
                    <p className="text-xs text-gray-900">${item.currentBidPrice}</p>
                    <p className="text-xs text-gray-900">{item.bidsCount} bids</p>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromFavorites(item.id)}
                    className="text-red-500 font-bold"
                  >
                    ✖
                  </button>
                </li>
              ))}
            </ul>
          )}
          <div className="mt-4 font-semibold text-sm">
            Total bids Amount: ${totalBidAmount}
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Auctions;


