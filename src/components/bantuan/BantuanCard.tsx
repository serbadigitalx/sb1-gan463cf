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

  const handleClick = () => {
    const slug = generateSlug(bantuan.name);
    navigate(`/bantuan/${slug}`);
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
      {/* Rest of the component remains the same */}
    </div>
  );
}