import Link from 'next/link';
import React from 'react';

const SidebarComponent = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-64 bg-gray-900 text-white shadow-lg">
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-6">Codestic Solutions</h2>
      </div>
      
      <nav className="px-4">
        <ul className="space-y-2">
          <li>
            <Link href="/dashboard" className="flex items-center p-3 text-gray-300 hover:bg-gray-800 rounded-lg transition-colors">
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Dashboard
            </Link>
          </li>
          <li>
            <Link href="/form" className="flex items-center p-3 text-gray-300 hover:bg-gray-800 rounded-lg transition-colors">
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              Add Projects
            </Link>
          </li>
        </ul>
      </nav>

      <div className="absolute bottom-0 left-0 right-0 p-4">
        <div className="flex items-center space-x-4 text-gray-300">
          <img src="https://via.placeholder.com/40" alt="Profile" className="w-10 h-10 rounded-full" />
          <div>
            <p className="font-medium">Admin User</p>
            <p className="text-sm text-gray-500">admin@example.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarComponent;
