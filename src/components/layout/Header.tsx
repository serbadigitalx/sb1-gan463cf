import React from 'react';
import { Link } from 'react-router-dom';
import { HelpCircleIcon } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-20">
          <Link to="/" className="flex items-center space-x-2">
            <HelpCircleIcon className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">BantuanFinder</span>
          </Link>
        </div>
      </div>
    </header>
  );
}