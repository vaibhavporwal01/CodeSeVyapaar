import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import SellerNavbar from './seller-Components/SellerNavbar';

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
              <DashboardCard title="Total Orders" value="400" change="↑ 10%" color="green" icon="shopping_cart" />
              <DashboardCard title="Total Sell" value="₹42.5L" change="↓ 5%" color="red" icon="attach_money" />
              <DashboardCard title="Total Products" value="452" change="↑ 23" color="green" icon="inventory" />
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

const DashboardCard = ({ title, value, change, color, icon }) => (
  <div className="bg-white rounded-lg shadow p-4">
    <h3 className="text-sm font-semibold flex items-center">
      <span className="material-icons-outlined mr-2">{icon}</span>
      {title}
    </h3>
    <p className="text-2xl font-bold mt-2">{value}</p>
    <p className={`text-xs text-${color}-500 mt-1`}>{change} vs last month</p>
  </div>
);

const OrderSummary = () => (
  <div className="bg-white rounded-lg shadow p-4">
    <h3 className="text-sm font-semibold mb-4">Order Summary</h3>
    <div className="space-y-3">
      {[
        { label: 'Pending Orders', percentage: 40, color: 'yellow' },
        { label: 'Shipped Orders', percentage: 30, color: 'purple' },
        { label: 'Delivered Orders', percentage: 30, color: 'green' },
      ].map((item, index) => (
        <div key={index}>
          <div className="flex justify-between text-xs">
            <span>{item.label}</span>
            <span>{item.percentage}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
            <div className={`bg-${item.color}-500 h-2 rounded-full`} style={{ width: `${item.percentage}%` }}></div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const PaymentSummary = () => (
  <div className="bg-white rounded-lg shadow p-4">
    <h3 className="text-sm font-semibold mb-4">Payment Summary</h3>
    <div className="relative h-48">
      {/* Y-Axis */}
      <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs pr-2">
        <span>₹6,000</span>
        <span>₹4,000</span>
        <span>₹2,000</span>
        <span>₹0</span>
      </div>

      {/* Bars */}
      <div className="absolute inset-0 flex items-end justify-around px-4">
        <div className="flex flex-col items-center">
          <div className="bg-purple-500 w-10 h-12 sm:h-16 lg:h-24 rounded-t"></div>
          <span className="text-xs mt-2">1-30 days</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-purple-500 w-10 h-24 sm:h-32 lg:h-40 rounded-t"></div>
          <span className="text-xs mt-2">31-60 days</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-purple-500 w-10 h-16 sm:h-20 lg:h-28 rounded-t"></div>
          <span className="text-xs mt-2">61-90 days</span>
        </div>
      </div>
    </div>
  </div>
);


const ReviewOrders = () => (
  <div className="bg-white rounded-lg shadow p-4">
    <h3 className="text-sm font-semibold mb-4">Review Orders</h3>
    <div className="space-y-3">
      {[
        { date: '01/04/2024', product: 'ZithroMax Antibiotic', status: 'In Transit', color: 'blue' },
        { date: '02/04/2024', product: 'Panadol Extra Strength', status: 'Pending', color: 'yellow' },
        { date: '24/05/2024', product: 'CiproCure 500mg', status: 'Delivered', color: 'green' },
      ].map((order, index) => (
        <div key={index} className="flex justify-between text-xs">
          <span>{order.date}</span>
          <span>{order.product}</span>
          <span className={`text-${order.color}-500`}>{order.status}</span>
        </div>
      ))}
    </div>
  </div>
);

export default SellerDashboard;
