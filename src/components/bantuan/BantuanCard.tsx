import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ExternalLinkIcon } from 'lucide-react';
import { BantuanKerajaan } from '../../types';

interface BantuanCardProps {
  bantuan: BantuanKerajaan;
  variant?: 'default' | 'compact';
}

export default function BantuanCard({ bantuan, variant = 'default' }: BantuanCardProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/bantuan/${bantuan.id}`);
  };

  if (variant === 'compact') {
    return (
      <div 
        onClick={handleClick}
        className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-200 cursor-pointer"
      >
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
          {bantuan.name}
        </h3>
        <div className="mb-3">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
            {bantuan.category}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-500">
            Tarikh Tutup: <span className="font-medium">{bantuan.deadline}</span>
          </p>
          <a
            href={bantuan.applicationLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800"
            onClick={(e) => e.stopPropagation()}
          >
            Mohon
            <ExternalLinkIcon className="ml-1 h-3 w-3" />
          </a>
        </div>
      </div>
    );
  }

  return (
    <div 
      onClick={handleClick}
      className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200 cursor-pointer"
    >
      <h3 className="text-xl font-semibold text-gray-900 mb-2">
        {bantuan.name}
      </h3>
      <div className="mb-4">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
          {bantuan.category}
        </span>
      </div>
      <div className="space-y-4">
        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-2">Kelayakan:</h4>
          <ul className="list-disc list-inside space-y-1 text-gray-600">
            {bantuan.eligibility.map((criteria, index) => (
              <li key={index}>{criteria}</li>
            ))}
          </ul>
        </div>
        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
          <div>
            <p className="text-sm text-gray-600">
              Tarikh Tutup: <span className="font-medium">{bantuan.deadline}</span>
            </p>
          </div>
          <a
            href={bantuan.applicationLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            onClick={(e) => e.stopPropagation()}
          >
            Mohon Sekarang
            <ExternalLinkIcon className="ml-2 -mr-1 h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}