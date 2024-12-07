import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { LogOut } from 'lucide-react';
import { useSidebar } from '../Sidebar/SidebarContext';

const Header = () => {
  const { user, logout } = useAuth0();
  const { isCollapsed } = useSidebar();

  return (
    <header
      className={`fixed top-0 right-0 h-14 bg-white border-b border-gray-100 flex items-center justify-end px-4 transition-all duration-300 ${
        isCollapsed ? 'left-16' : 'left-64'
      }`}
    >
      <div className="flex items-center space-x-4">
        {user?.picture && (
          <img
            src={user.picture}
            alt={user.name}
            className="w-8 h-8 rounded-full border-2 border-gray-100"
          />
        )}
        <span className="font-medium text-gray-700">{user?.name}</span>
        <button
          onClick={() => logout({ returnTo: window.location.origin })}
          className="flex items-center space-x-1.5 px-3 py-1.5 text-sm bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors"
        >
          <LogOut className="w-4 h-4" />
          <span>Logout</span>
        </button>
      </div>
    </header>
  );
};

export default Header;