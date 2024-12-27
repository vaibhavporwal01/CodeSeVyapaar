import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';

const SellerDashboard = () => {
  return (
    <div className="dashboard-layout flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="dashboard-content flex-1 bg-gray-100 p-6">
        <div className="flex flex-col items-center justify-center min-h-screen">
          <div className="bg-white p-8 rounded-lg shadow-lg w-96">
            <h2 className="text-3xl font-bold mb-6">Welcome to Your Seller Dashboard</h2>

            <div className="dashboard-inner-content space-y-6">
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
        </div>

        {/* Outlet for Routing */}
        <Outlet />
      </div>
    </div>
  );
};

export default SellerDashboard;
