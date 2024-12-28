import React from 'react';

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

export default DashboardCard;
