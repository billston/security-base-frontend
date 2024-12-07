import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Layout from '../components/Layout/Layout';

const MainPage = () => {
  const { user } = useAuth0();

  return (
    <Layout>
      <div className="bg-white rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Welcome, {user?.name}!
        </h1>
        <p className="text-gray-600">
          You're now signed in to your account. Start exploring the dashboard.
        </p>
      </div>
    </Layout>
  );
};

export default MainPage;