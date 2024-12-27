import React, { useState } from 'react';
import './Sidebar.css';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation(); // Get current route
  const [active, setActive] = useState(location.pathname); // Set active state based on the current route

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
    <div className="sidebar-container bg-white h-screen w-60 shadow-lg">
      <ul className="menu-list p-4 space-y-2">
        {menuItems.map((item) => (
          <li key={item.name}>
            <Link
              to={item.path}
              className={`sidebar-item flex items-center space-x-3 p-2 rounded-lg ${
                active === item.path ? 'active' : 'hover:bg-gray-200'
              }`}
              onClick={() => setActive(item.path)}
            >
              <span className="icon text-lg">{item.icon}</span>
              <span className="label">{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
