import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import PrivateRoute from './components/PrivateRoute';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import NotFoundPage from './pages/NotFoundPage';

const AUTH0_DOMAIN = 'dev-q2n8zijxljidyp8c.us.auth0.com';
const AUTH0_CLIENT_ID = 'wpiDDKPQctDk2c6Tcl63NQTvu1VdvNhf';

function App() {
  return (
    <Auth0Provider
      domain={AUTH0_DOMAIN}
      clientId={AUTH0_CLIENT_ID}
      authorizationParams={{
        redirect_uri: window.location.origin,
        prompt: 'login',
      }}
    >
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/"
            element={
              <PrivateRoute>
                <MainPage />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </Auth0Provider>
  );
}

export default App;