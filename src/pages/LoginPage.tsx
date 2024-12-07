import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { LogIn } from 'lucide-react';
import { loginWithGoogle, loginWithMicrosoft } from '../utils/auth';

const LoginPage = () => {
  const auth0Context = useAuth0();

  const handleGoogleLogin = async () => {
    await loginWithGoogle(auth0Context);
  };

  const handleMicrosoftLogin = async () => {
    await loginWithMicrosoft(auth0Context);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <div className="text-center mb-8">
          <LogIn className="w-12 h-12 mx-auto text-blue-500 mb-4" />
          <h1 className="text-2xl font-bold text-gray-800">Welcome Back</h1>
          <p className="text-gray-600 mt-2">Please sign in to continue</p>
        </div>

        <div className="space-y-4">
          <button
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center space-x-2 bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors"
          >
            <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
            <span>Continue with Google</span>
          </button>

          <button
            onClick={handleMicrosoftLogin}
            className="w-full flex items-center justify-center space-x-2 bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors"
          >
            <img src="https://www.microsoft.com/favicon.ico" alt="Microsoft" className="w-5 h-5" />
            <span>Continue with Microsoft</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;