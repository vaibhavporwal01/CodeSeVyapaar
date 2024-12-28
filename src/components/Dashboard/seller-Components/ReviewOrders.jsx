import React from 'react';

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

export default ReviewOrders;
