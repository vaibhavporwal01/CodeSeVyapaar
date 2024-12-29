import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RevenueCard = ({ title, apiEndpoint, color, icon }) => {
  const [value, setValue] = useState(0);
  const [change, setChange] = useState('0%');
  const [trend, setTrend] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiEndpoint);
        const { value, change } = response.data;
        setValue(value);
        setChange(change);
        setTrend(change.includes('-') ? 'down' : 'up');
      } catch (error) {
        console.error('Error fetching revenue data:', error);
      }
    };

    fetchData();
  }, [apiEndpoint]);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 flex items-center justify-between space-x-4">
      <div className="flex flex-col">
        <div className="flex items-center text-sm font-semibold text-gray-700">
          <span className={`material-icons mr-2 text-${color === 'green' ? 'green' : 'red'}-500`}>
            {icon}
          </span>
          {title}
        </div>
        <p className="text-2xl font-bold text-gray-800 mt-2">{value}</p>
        <p className={`text-xs mt-1 text-${color === 'green' ? 'green' : 'red'}-500`}>
          {trend === 'up' ? '↑' : '↓'} {change} vs last month
        </p>
      </div>
      <div className="relative w-20 h-14">
        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 100 50">
          <path
            d={`M0 40 Q 25 ${trend === 'up' ? '10' : '30'}, 50 40 T 100 ${trend === 'up' ? '10' : '30'}`}
            fill="transparent"
            stroke={color === 'green' ? '#34D399' : '#F87171'}
            strokeWidth="2"
          />
        </svg>
      </div>
    </div>
  );
};

export default RevenueCard;
