import React from 'react';
import PageHeader from '../components/PageHeader';

export default function Settings() {
  return (
    <div>
      <PageHeader title="Settings" />
      <div className="bg-[#1C1C1E] rounded-xl p-6">
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold text-white mb-6">Profile Settings</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Name</label>
                <input
                  type="text"
                  className="w-full bg-[#2C2C2E] text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  defaultValue="Kuri Arikson"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                <input
                  type="email"
                  className="w-full bg-[#2C2C2E] text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  defaultValue="kuri@example.com"
                />
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold text-white mb-6">Password</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Current Password</label>
                <input
                  type="password"
                  className="w-full bg-[#2C2C2E] text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">New Password</label>
                <input
                  type="password"
                  className="w-full bg-[#2C2C2E] text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Confirm Password</label>
                <input
                  type="password"
                  className="w-full bg-[#2C2C2E] text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 flex justify-end">
          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}