// src/pages/SellerDashboard.js
import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import SellerNavbar from './seller-Components/SellerNavbar';
import RevenueCard from './seller-Components/RevenueCard';
import SalesCard from './seller-Components/SalesCard';
import TotalProductsCard from './seller-Components/TotalProductsCard';
import OrderSummary from './seller-Components/OrderSummary';
import PaymentSummary from './seller-Components/PaymentSummary';
import ReviewOrders from './seller-Components/ReviewOrders';

const SellerDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Navbar */}
      <SellerNavbar />

      <div className="flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 p-6 mt-4 space-y-6">
          {/* Breadcrumb Navigation */}
          <nav className="text-sm text-gray-500 mb-4">
            <Link to="/" className="hover:text-blue-500">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/seller-dashboard" className="text-gray-800 font-semibold">Seller Portal</Link>
          </nav>

          {/* Dashboard Content */}
          <div className="space-y-6">
            {/* Top Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <RevenueCard title="Total Orders" value="400" change="↑ 10%" color="green" icon="shopping_cart" />
              <SalesCard title="Total Sell" value="₹42.5L" change="↓ 5%" color="red" icon="attach_money" />
              <TotalProductsCard title="Total Products" value="452" change="↑ 23" color="green" icon="inventory" />
            </div>

            {/* Order Summary & Payment Summary */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <OrderSummary />
              <PaymentSummary />
            </div>

            {/* Review Orders */}
            <ReviewOrders />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerDashboard;
