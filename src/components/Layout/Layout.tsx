import React from 'react';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import { useSidebar } from './Sidebar/SidebarContext';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { isCollapsed } = useSidebar();

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className={`flex-1 transition-all duration-300 ${isCollapsed ? 'ml-16' : 'ml-64'}`}>
        <Header />
        <main className="p-6 mt-14">{children}</main>
      </div>
    </div>
  );
};

export default Layout;