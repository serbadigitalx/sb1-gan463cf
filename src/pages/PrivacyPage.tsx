import React from 'react';
import { Shield, Lock, Eye, FileText } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="text-center mb-12">
            <Shield className="w-16 h-16 text-blue-600 mx-auto mb-4" />
            <h1 className="text-3xl font-bold mb-4">Dasar Privasi</h1>
            <p className="text-gray-600">
              Kami mengambil berat tentang privasi anda. Berikut adalah cara kami mengendalikan maklumat anda.
            </p>
          </div>

          <div className="space-y-8">
            <section>
              <div className="flex items-center mb-4">
                <Lock className="w-6 h-6 text-blue-600 mr-2" />
                <h2 className="text-xl font-semibold">Pengumpulan Maklumat</h2>
              </div>
              <p className="text-gray-600 mb-4">
                Kami mengumpul maklumat peribadi yang anda berikan kepada kami semasa menggunakan perkhidmatan kami, termasuk:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Nama dan maklumat hubungan</li>
                <li>Maklumat pendapatan</li>
                <li>Status pekerjaan</li>
                <li>Lokasi</li>
              </ul>
            </section>

            <section>
              <div className="flex items-center mb-4">
                <Eye className="w-6 h-6 text-blue-600 mr-2" />
                <h2 className="text-xl font-semibold">Penggunaan Maklumat</h2>
              </div>
              <p className="text-gray-600 mb-4">
                Maklumat yang dikumpul digunakan untuk:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Memadankan anda dengan bantuan kerajaan yang sesuai</li>
                <li>Menambah baik perkhidmatan kami</li>
                <li>Berkomunikasi dengan anda tentang perkhidmatan kami</li>
                <li>Mematuhi keperluan undang-undang</li>
              </ul>
            </section>

            <section>
              <div className="flex items-center mb-4">
                <FileText className="w-6 h-6 text-blue-600 mr-2" />
                <h2 className="text-xl font-semibold">Perlindungan Data</h2>
              </div>
              <p className="text-gray-600">
                Kami mengambil langkah-langkah keselamatan yang sesuai untuk melindungi maklumat peribadi anda daripada akses, pengubahan, pendedahan, atau pemusnahan yang tidak dibenarkan.
              </p>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              Untuk sebarang pertanyaan mengenai dasar privasi kami, sila hubungi kami di{' '}
              <a href="mailto:privacy@bantuanfinder.my" className="text-blue-600 hover:text-blue-800">
                privacy@bantuanfinder.my
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}