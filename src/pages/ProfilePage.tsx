import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Mail, User, Calendar } from 'lucide-react';
import Layout from '../components/Layout/Layout';

const ProfilePage = () => {
  const { user } = useAuth0();

  return (
    <Layout>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Profile</h1>
        
        <div className="bg-white rounded-lg shadow-sm">
          <div className="p-6 border-b border-gray-100">
            <div className="flex items-center space-x-4">
              {user?.picture && (
                <img
                  src={user.picture}
                  alt={user.name}
                  className="w-20 h-20 rounded-full border-4 border-gray-100"
                />
              )}
              <div>
                <h2 className="text-xl font-semibold text-gray-800">{user?.name}</h2>
                <p className="text-gray-500">{user?.email}</p>
              </div>
            </div>
          </div>
          
          <div className="p-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-600">
                <User className="w-5 h-5" />
                <span>Username: {user?.nickname || 'Not set'}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <Mail className="w-5 h-5" />
                <span>Email: {user?.email}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <Calendar className="w-5 h-5" />
                <span>Joined: {new Date(user?.updated_at || '').toLocaleDateString()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProfilePage;