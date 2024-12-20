import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import PrivateRoute from './components/PrivateRoute';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import ProfilePage from './pages/ProfilePage';
import SettingsPage from './pages/SettingsPage';
import NotFoundPage from './pages/NotFoundPage';
import { SidebarProvider } from './components/Layout/Sidebar/SidebarContext';
import AuthCallback from './features/auth0/components/AuthCallback';

const AUTH0_DOMAIN = 'dev-q2n8zijxljidyp8c.us.auth0.com';
const AUTH0_CLIENT_ID = 'wpiDDKPQctDk2c6Tcl63NQTvu1VdvNhf';

function App() {
  return (
    <Auth0Provider
      domain={AUTH0_DOMAIN}
      clientId={AUTH0_CLIENT_ID}
      authorizationParams={{
        redirect_uri: `${window.location.origin}/auth/callback`,
        response_type: 'code',
        prompt: 'login',
      }}
    >
      <Router>
        <SidebarProvider>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/auth/callback" element={<AuthCallback />} />
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <MainPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <PrivateRoute>
                  <ProfilePage />
                </PrivateRoute>
              }
            />
            <Route
              path="/settings"
              element={
                <PrivateRoute>
                  <SettingsPage />
                </PrivateRoute>
              }
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </SidebarProvider>
      </Router>
    </Auth0Provider>
  );
}

export default App;