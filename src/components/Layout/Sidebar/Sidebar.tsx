import React from 'react';
import { Home, Users, Settings, ChevronRight, ChevronLeft } from 'lucide-react';
import { useSidebar } from './SidebarContext';
import { SidebarItem } from './SidebarItem';

const Sidebar: React.FC = () => {
  const { isCollapsed, toggleSidebar } = useSidebar();

  return (
    <div
      className={`fixed left-0 top-0 h-screen bg-gray-800 transition-all duration-300 ${
        isCollapsed ? 'w-16' : 'w-64'
      }`}
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          {!isCollapsed && <span className="text-white font-semibold">Dashboard</span>}
          <button
            onClick={toggleSidebar}
            className="p-1.5 rounded-lg bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white transition-colors"
          >
            {isCollapsed ? (
              <ChevronRight className="w-4 h-4" />
            ) : (
              <ChevronLeft className="w-4 h-4" />
            )}
          </button>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          <SidebarItem to="/" icon={Home} label="Home" />
          <SidebarItem to="/profile" icon={Users} label="Profile" />
          <SidebarItem to="/settings" icon={Settings} label="Settings" />
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;