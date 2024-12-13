import React, { useEffect } from 'react';
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

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

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
          {/* Category Badge */}
          <div className="bg-blue-50 px-6 py-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
              {bantuan.category}
            </span>
          </div>

          {/* Main Content */}
          <div className="p-6">
            {/* Title and Description */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{bantuan.name}</h1>
              <p className="text-gray-600 text-lg">
                Program bantuan kerajaan untuk membantu rakyat Malaysia yang memerlukan sokongan dalam bidang {bantuan.category.toLowerCase()}.
              </p>
            </div>

            {/* Key Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start space-x-3">
                <CalendarIcon className="w-6 h-6 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-gray-900">Tarikh Tutup</h3>
                  <p className="text-gray-600">{bantuan.deadline}</p>
                </div>
              </div>

              {bantuan.maxIncome && (
                <div className="flex items-start space-x-3">
                  <DollarSign className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-gray-900">Had Pendapatan</h3>
                    <p className="text-gray-600">RM {formatCurrency(bantuan.maxIncome)}</p>
                  </div>
                </div>
              )}

              {bantuan.employmentStatus && (
                <div className="flex items-start space-x-3">
                  <Users className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-gray-900">Status Pekerjaan</h3>
                    <p className="text-gray-600">{bantuan.employmentStatus.join(', ')}</p>
                  </div>
                </div>
              )}

              <div className="flex items-start space-x-3">
                <MapPin className="w-6 h-6 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-gray-900">Lokasi</h3>
                  <p className="text-gray-600">{bantuan.locations.join(', ')}</p>
                </div>
              </div>
            </div>

            {/* Eligibility Section */}
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <CheckCircle2 className="w-6 h-6 text-blue-600 mr-2" />
                <h2 className="text-xl font-semibold">Kelayakan</h2>
              </div>
              <ul className="space-y-3">
                {bantuan.eligibility.map((criteria, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3" />
                    <span className="text-gray-600">{criteria}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Important Notes */}
            <div className="bg-yellow-50 rounded-lg p-4 mb-8">
              <div className="flex">
                <AlertCircle className="w-5 h-5 text-yellow-600 mr-2" />
                <div>
                  <h3 className="text-sm font-medium text-yellow-800">Nota Penting</h3>
                  <p className="mt-2 text-sm text-yellow-700">
                    Sila pastikan anda memenuhi semua kriteria kelayakan sebelum membuat permohonan. 
                    Permohonan yang tidak lengkap atau tidak memenuhi syarat akan ditolak.
                  </p>
                </div>
              </div>
            </div>

            {/* Apply Button */}
            <div className="flex justify-center">
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