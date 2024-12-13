import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <h3 className="text-white text-lg font-semibold mb-4">BantuanFinder</h3>
            <p className="text-sm">
              Membantu rakyat Malaysia mencari bantuan kerajaan yang sesuai dengan keperluan mereka.
            </p>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-white text-lg font-semibold mb-4">Pautan</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:text-white transition-colors">
                  Laman Utama
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm hover:text-white transition-colors">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-sm hover:text-white transition-colors">
                  Dasar Privasi
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-white transition-colors">
                  Hubungi Kami
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-white text-lg font-semibold mb-4">Hubungi</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-sm">
                <Mail className="w-4 h-4 mr-2" />
                info@bantuanfinder.my
              </li>
              <li className="flex items-center text-sm">
                <Phone className="w-4 h-4 mr-2" />
                +60 3-8000 8000
              </li>
              <li className="flex items-center text-sm">
                <MapPin className="w-4 h-4 mr-2" />
                Putrajaya, Malaysia
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-white text-lg font-semibold mb-4">Waktu Operasi</h3>
            <ul className="space-y-2 text-sm">
              <li>Isnin - Jumaat</li>
              <li>9:00 Pagi - 5:00 Petang</li>
              <li className="text-yellow-400">
                *Tutup pada cuti umum
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; {currentYear} BantuanFinder. Hak Cipta Terpelihara.</p>
        </div>
      </div>
    </footer>
  );
}