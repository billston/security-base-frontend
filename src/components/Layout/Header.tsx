import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { LogOut } from 'lucide-react';

const Header = () => {
  const { user, logout } = useAuth0();

  return (
    <header className="fixed top-0 right-0 h-16 bg-white shadow-md flex items-center justify-end px-6 ml-64">
      <div className="flex items-center space-x-4">
        {user?.picture && (
          <img
            src={user.picture}
            alt={user.name}
            className="w-8 h-8 rounded-full"
          />
        )}
        <span className="font-medium">{user?.name}</span>
        <button
          onClick={() => logout({ returnTo: window.location.origin })}
          className="flex items-center space-x-2 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
        >
          <LogOut className="w-4 h-4" />
          <span>Logout</span>
        </button>
      </div>
    </header>
  );
};

export default Header;