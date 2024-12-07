import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Header from '../components/Layout/Header';
import Sidebar from '../components/Layout/Sidebar';

const MainPage = () => {
  const { user } = useAuth0();

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 ml-64">
        <Header />
        <main className="p-8 mt-16">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
              Welcome, {user?.name}!
            </h1>
            <p className="text-gray-600">
              You're now signed in to your account. Start exploring the dashboard.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default MainPage;