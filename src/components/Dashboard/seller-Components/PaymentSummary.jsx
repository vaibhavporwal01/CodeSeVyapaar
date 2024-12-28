import React from 'react';

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

export default PaymentSummary;
