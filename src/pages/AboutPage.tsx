import React from 'react';
import { Users, Target, Shield } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Tentang BantuanFinder</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Platform digital yang memudahkan rakyat Malaysia mencari dan memohon bantuan kerajaan yang sesuai dengan keperluan mereka.
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-4">Misi Kami</h3>
            <p className="text-gray-600">
              Memudahkan akses kepada bantuan kerajaan untuk semua rakyat Malaysia melalui platform digital yang mesra pengguna.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <Target className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-4">Visi Kami</h3>
            <p className="text-gray-600">
              Menjadi platform utama yang menghubungkan rakyat Malaysia dengan bantuan kerajaan yang mereka perlukan.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-4">Nilai Kami</h3>
            <p className="text-gray-600">
              Ketelusan, kebolehpercayaan, dan komitmen untuk membantu rakyat Malaysia.
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Pasukan Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Ahmad Razali',
                role: 'Ketua Pegawai Eksekutif',
                image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=400&q=80'
              },
              {
                name: 'Sarah Abdullah',
                role: 'Ketua Pegawai Operasi',
                image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=400&q=80'
              },
              {
                name: 'Raj Kumar',
                role: 'Ketua Pegawai Teknologi',
                image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=400&q=80'
              }
            ].map((member) => (
              <div key={member.name} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}