import React from 'react';
import { Github, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col items-center justify-center space-y-4">
          <p className="text-gray-600">
            Created by Aryan Acharya
          </p>
          <div className="flex space-x-4">
            <a
              href="https://github.com/aryan1112003"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/aryan-acharya-9b939b316/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Aryan Acharya. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}