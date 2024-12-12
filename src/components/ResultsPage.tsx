import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeftIcon } from 'lucide-react';
import { UserInput } from '../types';
import { bantuanData } from '../data/bantuanData';
import BantuanCard from './bantuan/BantuanCard';

export default function ResultsPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const userInput = location.state?.userInput as UserInput;

  const matchingBantuan = React.useMemo(() => {
    if (!userInput) return [];

    return bantuanData.filter(bantuan => {
      const locationMatch = bantuan.locations.includes(userInput.location);
      const categoryMatch = bantuan.category === userInput.assistanceType;
      const incomeMatch = !bantuan.maxIncome || userInput.income <= bantuan.maxIncome;
      const employmentMatch = !bantuan.employmentStatus || 
        bantuan.employmentStatus.includes(userInput.employmentStatus);

      return locationMatch && categoryMatch && incomeMatch && employmentMatch;
    });
  }, [userInput]);

  if (!userInput) {
    navigate('/');
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="mb-6 inline-flex items-center text-blue-600 hover:text-blue-800"
        >
          <ArrowLeftIcon className="w-4 h-4 mr-2" />
          Kembali
        </button>

        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Bantuan Yang Sesuai Untuk Anda
        </h2>

        {matchingBantuan.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <p className="text-gray-600 text-lg">
              Tiada bantuan yang sesuai dijumpai. Sila cuba lagi dengan maklumat berbeza.
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {matchingBantuan.map((bantuan) => (
              <BantuanCard key={bantuan.id} bantuan={bantuan} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}