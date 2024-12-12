import React from 'react';
import { useNavigate } from 'react-router-dom';
import { EmploymentStatus, AssistanceType, MalaysianState, UserInput } from '../types';
import { HomeIcon, ArrowLeftIcon } from 'lucide-react';

const employmentStatuses: EmploymentStatus[] = ['Bekerja', 'Tidak Bekerja', 'Pelajar'];
const assistanceTypes: AssistanceType[] = ['Kewangan', 'Pendidikan', 'Perumahan', 'Kesihatan'];
const malaysianStates: MalaysianState[] = [
  'Johor', 'Kedah', 'Kelantan', 'Melaka', 'Negeri Sembilan', 'Pahang',
  'Perak', 'Perlis', 'Pulau Pinang', 'Sabah', 'Sarawak', 'Selangor',
  'Terengganu', 'W.P. Kuala Lumpur', 'W.P. Labuan', 'W.P. Putrajaya'
];

export default function UserForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState<UserInput>({
    name: '',
    age: 0,
    income: 0,
    employmentStatus: 'Bekerja',
    location: 'Selangor',
    assistanceType: 'Kewangan'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/results', { state: { userInput: formData } });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'age' || name === 'income' ? Number(value) : value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <div className="flex justify-between items-center mb-6">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <ArrowLeftIcon className="w-4 h-4 mr-2" />
            Kembali ke Laman Utama
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Isi Maklumat Anda
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Nama
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="age" className="block text-sm font-medium text-gray-700">
                Umur
              </label>
              <input
                type="number"
                name="age"
                id="age"
                required
                min="0"
                value={formData.age}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="income" className="block text-sm font-medium text-gray-700">
                Pendapatan (RM)
              </label>
              <input
                type="number"
                name="income"
                id="income"
                required
                min="0"
                value={formData.income}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="employmentStatus" className="block text-sm font-medium text-gray-700">
                Status Pekerjaan
              </label>
              <select
                name="employmentStatus"
                id="employmentStatus"
                required
                value={formData.employmentStatus}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                {employmentStatuses.map(status => (
                  <option key={status} value={status}>{status}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                Negeri
              </label>
              <select
                name="location"
                id="location"
                required
                value={formData.location}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                {malaysianStates.map(state => (
                  <option key={state} value={state}>{state}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="assistanceType" className="block text-sm font-medium text-gray-700">
                Jenis Bantuan
              </label>
              <select
                name="assistanceType"
                id="assistanceType"
                required
                value={formData.assistanceType}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                {assistanceTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Cari Bantuan
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}