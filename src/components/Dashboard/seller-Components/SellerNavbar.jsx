import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaBell, FaSearch } from 'react-icons/fa';

const SellerNavbar = ({ toggleSidebar }) => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    if (searchQuery) {
      // Redirect to the search results page or handle search logic
      navigate(`/search?query=${searchQuery}`);
    }
  };

  return (
    <div className="bg-white text-gray-800 flex items-center justify-between px-8 py-4 shadow-md fixed top-0 w-full z-10">
      <div className="flex items-center space-x-8 w-full lg:w-auto">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img
            src="https://via.placeholder.com/30"
            alt="Logo"
            className="w-10 h-10"
          />
          <div className="leading-tight">
            <span className="text-lg font-semibold text-blue-600">Blubirch</span>
            <br />
            <span className="text-sm font-medium text-gray-500">Seller</span>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="relative w-full max-w-xs lg:max-w-md mx-4">
        <input
          type="text"
          className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
          placeholder="Search products"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <FaSearch
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600 text-xl cursor-pointer"
          onClick={handleSearch}
        />
      </div>

      <div className="flex items-center space-x-6 lg:space-x-4">
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 hidden sm:block"
          onClick={() => navigate('/add-product')}
        >
          Add New Product
        </button>

        <div className="relative">
          <FaBell
            className="text-gray-600 text-3xl cursor-pointer hover:text-blue-600 transition-colors duration-200"
            onClick={() => navigate('/notifications')}
          />
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">4</span>
        </div>

        {/* Profile Section */}
        <div
          className="flex items-center space-x-2 cursor-pointer hover:bg-gray-100 px-3 py-2 rounded-lg transition-colors duration-200"
          onClick={() => toggleSidebar()}
        >
          <div className="bg-gray-300 rounded-full w-10 h-10 flex items-center justify-center text-gray-500">
            40x40
          </div>
          <span className="text-sm font-medium text-gray-600">ASIN</span>
        </div>
      </div>
    </div>
  );
};

export default SellerNavbar;
