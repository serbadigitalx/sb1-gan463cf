import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchIcon } from 'lucide-react';

export default function Hero() {
  const navigate = useNavigate();

  return (
    <div className="min-h-[60vh] bg-blue-50 flex flex-col items-center justify-center p-4">
      <div className="max-w-3xl text-center space-y-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Cari Bantuan Kerajaan Yang Sesuai Untuk Anda
        </h1>
        
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Kami membantu anda mencari bantuan kerajaan yang sesuai dengan keperluan anda. 
          Isi maklumat anda dan dapatkan senarai bantuan yang tersedia.
        </p>

        <button
          onClick={() => navigate('/form')}
          className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
        >
          <SearchIcon className="w-5 h-5 mr-2" />
          Mula Cari Bantuan
        </button>
      </div>
    </div>
  );
}