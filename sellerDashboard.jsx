import React from 'react';
import SellerNavbar from './seller-Components/SellerNavbar'; // Import the new Seller Navbar

const SellerDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 pt-20"> {/* Adjust for fixed navbar */}
      {/* Include the custom Seller Navbar */}
      <SellerNavbar />

      <div className="content-container p-8 mt-16"> {/* Add padding-top to avoid overlap */}
        <h2 className="text-3xl font-bold mb-6">Welcome to Your Seller Dashboard</h2>

        <div className="dashboard-content space-y-6">
          <p className="text-lg">Here you can manage your products, view orders, and track your sales.</p>
          
          <button 
            className="bg-green-500 text-white p-3 rounded-lg w-full hover:bg-green-700"
            onClick={() => console.log('Manage Products clicked')}
          >
            Manage Products
          </button>

          <button 
            className="bg-blue-500 text-white p-3 rounded-lg w-full hover:bg-blue-700"
            onClick={() => console.log('View Orders clicked')}
          >
            View Orders
          </button>

          <button 
            className="bg-yellow-500 text-white p-3 rounded-lg w-full hover:bg-yellow-700"
            onClick={() => console.log('Track Sales clicked')}
          >
            Track Sales
          </button>
        </div>
      </div>
    </div>
  );
};

export default SellerDashboard;
