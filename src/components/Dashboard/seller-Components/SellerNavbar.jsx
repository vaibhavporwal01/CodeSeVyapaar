import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaBell } from 'react-icons/fa'; // Notification icon

const SellerNavbar = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white text-gray-800 flex items-center justify-between px-8 py-4 shadow-md fixed top-0 w-full z-10">
      {/* Left side: Logo and Search Bar */}
      <div className="flex items-center space-x-8">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img
            src="https://via.placeholder.com/30" // Placeholder for the logo
            alt="Logo"
            className="w-10 h-10"
          />
          <div className="leading-tight">
            <span className="text-lg font-semibold text-blue-600">Blubirch</span>
            <br />
            <span className="text-sm font-medium text-gray-500">Seller</span>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="bg-gray-100 text-gray-700 border border-gray-300 rounded-full px-4 py-2 w-96 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
            &#x1F50D;
          </span>
        </div>
      </div>

      {/* Right side: Add Product Button, Notification, and Profile */}
      <div className="flex items-center space-x-6">
        {/* Add Product Button */}
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
          onClick={() => navigate('/add-product')}
        >
          Add New Product
        </button>

        {/* Notification Icon */}
        <div className="relative">
          <FaBell
            className="text-gray-600 text-3xl cursor-pointer hover:text-blue-600 transition-colors duration-200"
            onClick={() => navigate('/notifications')} // Navigate to notifications page
          />
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">4</span>
        </div>

        {/* Profile Section */}
        <div
          className="flex items-center space-x-2 cursor-pointer hover:bg-gray-100 px-3 py-2 rounded-lg transition-colors duration-200"
          onClick={() => navigate('/profile')}
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
