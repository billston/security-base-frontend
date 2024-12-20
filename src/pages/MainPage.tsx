import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Layout from '../components/Layout/Layout';
import { useLocation } from 'react-router-dom';

const MainPage = () => {
  const { user } = useAuth0();
  const location = useLocation();
  const [authCode, setAuthCode] = useState<string | null>(null);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    console.log("Search Params:", searchParams);
    const code = searchParams.get('code');
    if (code) {
      setAuthCode(code);
      console.log("Authorization Code:", code);
      // Aquí puedes enviar el código al backend
      // fetch('/api/auth', { method: 'POST', body: JSON.stringify({ code }) });
    }
  }, [location]);

  return (
    <Layout>
      <div className="bg-white rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Welcome, {user?.name}!
        </h1>
        <p className="text-gray-600">
          You're now signed in to your account. Start exploring the dashboard.
        </p>
        {authCode && (
          <div>
            <p>Authorization Code:</p>
            <pre>{authCode}</pre>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default MainPage;