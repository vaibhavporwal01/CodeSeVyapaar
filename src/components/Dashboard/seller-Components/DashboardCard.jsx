import React from 'react';

const DashboardCard = ({ title, value, change, color, icon }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 flex items-center justify-between space-x-4">
      {/* Left side with icon and title */}
      <div className="flex flex-col">
        <div className="flex items-center text-sm font-semibold text-gray-700">
          {/* Material Icon with color */}
          <span className={`material-icons mr-2 text-${color === 'green' ? 'green' : 'red'}-500`}>
            {icon}
          </span>
          {title}
        </div>
        <p className="text-2xl font-bold text-gray-800 mt-2">{value}</p>
        <p className={`text-xs mt-1 text-${color === 'green' ? 'green' : 'red'}-500`}>
          {change} vs last month
        </p>
      </div>

      {/* Right side with a placeholder for a line chart */}
      <div className="relative w-20 h-14">
        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 100 50">
          <path
            d="M0 40 Q 25 10, 50 40 T 100 10"
            fill="transparent"
            stroke={color === 'green' ? '#34D399' : '#F87171'}
            strokeWidth="2"
          />
        </svg>
      </div>
    </div>
  );
};

export default DashboardCard;
