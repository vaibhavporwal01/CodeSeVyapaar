import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TotalProductsCard = ({ title, apiEndpoint, icon }) => {
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
        console.error('Error fetching total products data:', error);
      }
    };

    fetchData();
  }, [apiEndpoint]);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 flex items-center justify-between space-x-4">
      <div className="flex flex-col">
        <div className="flex items-center text-sm font-semibold text-gray-700">
          <span className="material-icons mr-2 text-black">
            {icon}
          </span>
          {title}
        </div>
        <p className="text-2xl font-bold text-gray-800 mt-2">{value}</p>
        <p className={`text-sm mt-1 text-${trend === 'up' ? 'green' : 'red'}-500`}>
          {trend === 'up' ? '↑' : '↓'} {change} vs last month
        </p>
      </div>
    </div>
  );
};

export default TotalProductsCard;
