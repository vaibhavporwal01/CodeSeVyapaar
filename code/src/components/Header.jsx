// src/components/Header.js
import React from 'react';
import { BellIcon, ChevronDownIcon } from '@heroicons/react/solid';

const Header = () => {
  return (
    <div className="bg-white shadow-md p-4 flex items-center justify-between">
      {/* Logo and Title */}
      <div className="flex items-center space-x-2">
        <div className="text-2xl font-semibold text-blue-600">Blubirch</div>
        <span className="text-gray-500">Seller</span>
      </div>
      
      {/* Search Bar */}
      <div className="flex items-center space-x-4">
        <input
          type="text"
          className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Search"
        />
      </div>
      
      {/* Notifications and Profile */}
      <div className="flex items-center space-x-4">
        <div className="relative">
          <BellIcon className="h-6 w-6 text-gray-600" />
          <span className="absolute top-0 right-0 block w-2.5 h-2.5 bg-red-500 rounded-full"></span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-gray-600 text-sm">3 Feb, 2023</span>
          <ChevronDownIcon className="h-5 w-5 text-gray-600" />
          <img
            src="https://via.placeholder.com/40"
            alt="profile"
            className="w-10 h-10 rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
