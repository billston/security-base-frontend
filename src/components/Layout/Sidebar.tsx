import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Settings, Users } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-gray-800 text-white fixed left-0 top-0 p-4">
      <div className="flex flex-col space-y-6">
        <div className="flex items-center space-x-2 mb-8">
          <Home className="w-6 h-6" />
          <span className="text-xl font-bold">Dashboard</span>
        </div>
        
        <nav className="flex flex-col space-y-4">
          <Link to="/" className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded">
            <Home className="w-5 h-5" />
            <span>Home</span>
          </Link>
          
          <Link to="/profile" className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded">
            <Users className="w-5 h-5" />
            <span>Profile</span>
          </Link>
          
          <Link to="/settings" className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded">
            <Settings className="w-5 h-5" />
            <span>Settings</span>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;