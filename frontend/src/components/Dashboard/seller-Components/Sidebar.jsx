import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = ({ isOpen }) => {
  const location = useLocation();
  const [active, setActive] = useState(location.pathname); // Track active state based on the current route

  const menuItems = [
    { name: 'Dashboard', icon: '📊', path: '/dashboard' },
    { name: 'Orders', icon: '🛒', path: '/orders' },
    { name: 'Products', icon: '📦', path: '/products' },
    { name: 'Analytics', icon: '📈', path: '/analytics' },
    { name: 'Customers', icon: '👥', path: '/customers' },
    { name: 'Profile', icon: '👤', path: '/profile' },
    { name: 'Setting', icon: '⚙️', path: '/settings' },
  ];

  return (
    <div
      className={`bg-white h-screen transition-all duration-300 ease-in-out p-4 flex flex-col ${isOpen ? 'w-60 opacity-100' : 'w-0 opacity-0'} ${isOpen ? '' : 'hidden'}`}
    >
      <ul className="space-y-2">
        {menuItems.map((item) => (
          <li key={item.name}>
            <Link
              to={item.path}
              className={`flex items-center space-x-3 p-2 rounded-lg transition-colors duration-300 ${
                active === item.path ? 'bg-indigo-100 text-indigo-600' : 'hover:bg-gray-200'
              }`}
              onClick={() => setActive(item.path)}
            >
              {/* Icon is always visible */}
              <span className="text-lg">{item.icon}</span>
              {/* Only show text when sidebar is open */}
              {isOpen && <span>{item.name}</span>}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
