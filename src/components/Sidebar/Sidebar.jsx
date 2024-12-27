import React, { useState } from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [active, setActive] = useState('Dashboard');

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
    <div className="sidebar-container">
      <ul>
        {menuItems.map((item) => (
          <Link
            to={item.path}
            key={item.name}
            className={`sidebar-item ${active === item.name ? 'active' : ''}`}
            onClick={() => setActive(item.name)}
          >
            <span className="icon">{item.icon}</span>
            <span className="label">{item.name}</span>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
