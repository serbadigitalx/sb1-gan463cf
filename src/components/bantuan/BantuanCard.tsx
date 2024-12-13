import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ExternalLinkIcon } from 'lucide-react';
import { BantuanKerajaan } from '../../types';
import { generateSlug } from '../../utils/slugs';

interface BantuanCardProps {
  bantuan: BantuanKerajaan;
  variant?: 'default' | 'compact';
}

export default function BantuanCard({ bantuan, variant = 'default' }: BantuanCardProps) {
  const navigate = useNavigate();
  const isOpen = new Date(bantuan.deadline) > new Date();

  const handleClick = () => {
    const slug = generateSlug(bantuan.name);
    navigate(`/bantuan/${slug}`);
  };

  if (variant === 'compact') {
    return (
      <div 
        onClick={handleClick}
        className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-200 cursor-pointer relative"
      >
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-900 line-clamp-2 pr-20">
            {bantuan.name}
          </h3>
          <span className={`absolute top-4 right-4 px-2.5 py-1 rounded-full text-xs font-medium ${
            isOpen 
              ? 'bg-green-100 text-green-800' 
              : 'bg-red-100 text-red-800'
          }`}>
            {isOpen ? 'Dibuka' : 'Ditutup'}
          </span>
        </div>
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
      className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200 cursor-pointer relative"
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold text-gray-900 pr-24">
          {bantuan.name}
        </h3>
        <span className={`absolute top-6 right-6 px-3 py-1 rounded-full text-sm font-medium ${
          isOpen 
            ? 'bg-green-100 text-green-800' 
            : 'bg-red-100 text-red-800'
        }`}>
          {isOpen ? 'Dibuka' : 'Ditutup'}
        </span>
      </div>

      <div className="mb-4">
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
          {bantuan.category}
        </span>
      </div>

      <div className="space-y-4">
        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-1">Kelayakan:</h4>
          <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
            {bantuan.eligibility.slice(0, 2).map((criteria, index) => (
              <li key={index}>{criteria}</li>
            ))}
          </ul>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
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
            Mohon Sekarang
            <ExternalLinkIcon className="ml-1 h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}