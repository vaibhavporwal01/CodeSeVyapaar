import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import SellerNavbar from './seller-Components/SellerNavbar'; // Import the new Seller Navbar
import { Outlet } from 'react-router-dom';

const SellerDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 pt-20 flex">
      {/* Include the custom Seller Navbar */}
      <SellerNavbar />

      <div className="dashboard-layout flex"></div>
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-8 mt-16 space-y-6">
        <h2 className="text-3xl font-bold mb-6">Welcome to Your Seller Dashboard</h2>
        <div className="dashboard-content flex-1 bg-gray-100 p-6"></div>
        <div className="dashboard-content space-y-6">
          <p className="text-lg">
            Here you can manage your products, view orders, and track your sales.
          </p>

          {/* Manage Products Button */}
          <button
            className="bg-green-500 text-white p-3 rounded-lg w-full hover:bg-green-700"
            onClick={() => console.log('Manage Products clicked')}
          >
            Manage Products
          </button>

          {/* View Orders Button */}
          <button
            className="bg-blue-500 text-white p-3 rounded-lg w-full hover:bg-blue-700"
            onClick={() => console.log('View Orders clicked')}
          >
            View Orders
          </button>

          {/* Track Sales Button */}
          <button
            className="bg-yellow-500 text-white p-3 rounded-lg w-full hover:bg-yellow-700"
            onClick={() => console.log('Track Sales clicked')}
          >
            Track Sales
          </button>
        </div>
      </div>

      {/* Outlet for Routing */}
      <Outlet />
    </div>
  );
};

export default SellerDashboard;
