import React from 'react';
import { Activity } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col space-y-2">
          <div className="flex items-center gap-2">
            <Activity className="w-8 h-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">AI Health Assistant</h1>
          </div>
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Aryan Acharya | 
            <a 
              href="https://github.com/aryan1112003" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 ml-1"
            >
              GitHub
            </a>
          </p>
        </div>
      </div>
    </header>
  );
}