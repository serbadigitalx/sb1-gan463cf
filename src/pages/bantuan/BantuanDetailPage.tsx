import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeftIcon, CalendarIcon, Users, DollarSign, MapPin, ExternalLinkIcon } from 'lucide-react';
import { bantuanData } from '../../data/bantuanData';
import { formatCurrency } from '../../utils/formatters';

export default function BantuanDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const bantuan = bantuanData.find(b => b.id === id);

  if (!bantuan) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Bantuan tidak dijumpai
          </h1>
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center text-blue-600 hover:text-blue-800"
          >
            <ArrowLeftIcon className="w-4 h-4 mr-2" />
            Kembali
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => navigate(-1)}
          className="mb-8 inline-flex items-center text-blue-600 hover:text-blue-800"
        >
          <ArrowLeftIcon className="w-4 h-4 mr-2" />
          Kembali
        </button>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Header */}
          <div className="bg-blue-600 text-white px-6 py-8">
            <h1 className="text-3xl font-bold mb-4">{bantuan.name}</h1>
            <div className="flex items-center space-x-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-500 text-white">
                {bantuan.category}
              </span>
              <span className="inline-flex items-center text-sm">
                <CalendarIcon className="w-4 h-4 mr-1" />
                Tarikh Tutup: {bantuan.deadline}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 space-y-8">
            {/* Key Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <DollarSign className="w-5 h-5 text-blue-600 mr-2" />
                  <h3 className="font-medium">Had Pendapatan</h3>
                </div>
                <p className="text-gray-600">
                  {bantuan.maxIncome ? `RM ${formatCurrency(bantuan.maxIncome)}` : 'Tiada had'}
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <Users className="w-5 h-5 text-blue-600 mr-2" />
                  <h3 className="font-medium">Status Pekerjaan</h3>
                </div>
                <p className="text-gray-600">
                  {bantuan.employmentStatus?.join(', ') || 'Semua'}
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <MapPin className="w-5 h-5 text-blue-600 mr-2" />
                  <h3 className="font-medium">Lokasi</h3>
                </div>
                <p className="text-gray-600">
                  {bantuan.locations.length > 3 
                    ? 'Seluruh Malaysia' 
                    : bantuan.locations.join(', ')}
                </p>
              </div>
            </div>

            {/* Eligibility */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Syarat Kelayakan</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {bantuan.eligibility.map((criteria, index) => (
                  <li key={index}>{criteria}</li>
                ))}
              </ul>
            </div>

            {/* Application Button */}
            <div className="flex justify-center pt-6">
              <a
                href={bantuan.applicationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Mohon Sekarang
                <ExternalLinkIcon className="ml-2 -mr-1 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}