import React from 'react';
import { TrendingUpIcon } from 'lucide-react';
import { bantuanData } from '../../data/bantuanData';
import BantuanCard from '../bantuan/BantuanCard';

export default function TrendingBantuan() {
  // Show the first 6 bantuan as trending
  const trendingBantuan = bantuanData.slice(0, 6);

  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center mb-6">
          <TrendingUpIcon className="h-6 w-6 text-blue-600 mr-2" />
          <h2 className="text-2xl font-bold text-gray-900">Bantuan Popular</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trendingBantuan.map((bantuan) => (
            <BantuanCard
              key={bantuan.id}
              bantuan={bantuan}
              variant="compact"
            />
          ))}
        </div>
      </div>
    </section>
  );
}