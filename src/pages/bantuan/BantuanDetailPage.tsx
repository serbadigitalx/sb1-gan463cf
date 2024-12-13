import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeftIcon, CalendarIcon, Users, DollarSign, MapPin, ExternalLinkIcon } from 'lucide-react';
import { bantuanData } from '../../data/bantuanData';
import { formatCurrency } from '../../utils/formatters';
import { getBantuanBySlug } from '../../utils/slugs';

export default function BantuanDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const bantuan = slug ? getBantuanBySlug(slug, bantuanData) : undefined;

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
          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{bantuan.name}</h1>
            
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-6">
              {bantuan.category}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-xl font-semibold mb-4">Kelayakan</h2>
                <ul className="space-y-3">
                  {bantuan.eligibility.map((criteria, index) => (
                    <li key={index} className="flex items-start">
                      <Users className="w-5 h-5 text-blue-600 mr-2 mt-1" />
                      <span>{criteria}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-6">
                {bantuan.maxIncome && (
                  <div>
                    <h2 className="text-xl font-semibold mb-2">Had Pendapatan</h2>
                    <div className="flex items-center text-gray-700">
                      <DollarSign className="w-5 h-5 text-blue-600 mr-2" />
                      <span>RM {formatCurrency(bantuan.maxIncome)}</span>
                    </div>
                  </div>
                )}

                <div>
                  <h2 className="text-xl font-semibold mb-2">Lokasi</h2>
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-blue-600 mr-2 mt-1" />
                    <span>{bantuan.locations.join(', ')}</span>
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-2">Tarikh Tutup</h2>
                  <div className="flex items-center text-gray-700">
                    <CalendarIcon className="w-5 h-5 text-blue-600 mr-2" />
                    <span>{bantuan.deadline}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 px-8 py-6">
            <a
              href={bantuan.applicationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full md:w-auto px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Mohon Sekarang
              <ExternalLinkIcon className="ml-2 -mr-1 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}