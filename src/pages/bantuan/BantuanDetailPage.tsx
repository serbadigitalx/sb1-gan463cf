import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  ArrowLeftIcon, 
  CalendarIcon, 
  Users, 
  DollarSign, 
  MapPin, 
  ExternalLinkIcon,
  Info,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
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
          {/* Header Section */}
          <div className="p-8">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-4">
              {bantuan.category}
            </div>

            <h1 className="text-3xl font-bold text-gray-900 mb-6">{bantuan.name}</h1>
            
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <div className="flex items-start">
                <Info className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                <p className="text-gray-600 leading-relaxed">
                  Program bantuan ini bertujuan untuk membantu rakyat Malaysia yang memerlukan sokongan dalam bidang {bantuan.category.toLowerCase()}. 
                  Bantuan ini disediakan oleh kerajaan untuk memastikan kesejahteraan rakyat terjamin.
                </p>
              </div>
            </div>

            {/* Status and Deadline */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center bg-green-50 text-green-700 px-4 py-2 rounded-lg">
                <CheckCircle2 className="w-5 h-5 mr-2" />
                <span>Status: Dibuka</span>
              </div>
              <div className="flex items-center bg-yellow-50 text-yellow-700 px-4 py-2 rounded-lg">
                <AlertCircle className="w-5 h-5 mr-2" />
                <span>Tarikh Tutup: {bantuan.deadline}</span>
              </div>
            </div>

            {/* Details Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Eligibility Section */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-4 text-gray-900">Syarat Kelayakan</h2>
                <ul className="space-y-4">
                  {bantuan.eligibility.map((criteria, index) => (
                    <li key={index} className="flex items-start">
                      <Users className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{criteria}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Additional Details Section */}
              <div className="space-y-6">
                {bantuan.maxIncome && (
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h2 className="text-xl font-semibold mb-4 text-gray-900">Had Pendapatan</h2>
                    <div className="flex items-center text-gray-700">
                      <DollarSign className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                      <span>Sehingga RM {formatCurrency(bantuan.maxIncome)} sebulan</span>
                    </div>
                  </div>
                )}

                <div className="bg-gray-50 rounded-lg p-6">
                  <h2 className="text-xl font-semibold mb-4 text-gray-900">Kawasan</h2>
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{bantuan.locations.join(', ')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Section */}
          <div className="bg-gray-50 px-8 py-6 border-t border-gray-100">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-gray-600 text-sm">
                * Sila pastikan anda memenuhi semua syarat kelayakan sebelum memohon
              </p>
              <a
                href={bantuan.applicationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
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