import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';
import { useSidebar } from './SidebarContext';

interface SidebarItemProps {
  to: string;
  icon: LucideIcon;
  label: string;
}

export const SidebarItem: React.FC<SidebarItemProps> = ({ to, icon: Icon, label }) => {
  const { isCollapsed } = useSidebar();
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`flex items-center ${
        isCollapsed ? 'justify-center' : 'justify-start'
      } p-2 rounded-lg transition-all duration-200 ${
        isActive
          ? 'bg-blue-500 text-white'
          : 'text-gray-400 hover:bg-gray-700 hover:text-white'
      }`}
    >
      <Icon className="w-5 h-5" />
      {!isCollapsed && <span className="ml-3">{label}</span>}
    </Link>
  );
};

export default SidebarItem;