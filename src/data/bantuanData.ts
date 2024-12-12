import { BantuanKerajaan } from '../types';

export const bantuanData: BantuanKerajaan[] = [
  {
    id: '1',
    name: 'Bantuan Sara Hidup (BSH)',
    category: 'Kewangan',
    eligibility: [
      'Warganegara Malaysia',
      'Pendapatan isi rumah RM2,208 dan ke bawah',
      'Berumur 21 tahun ke atas'
    ],
    locations: ['Johor', 'Kedah', 'Kelantan', 'Melaka', 'Negeri Sembilan', 'Pahang', 'Perak', 'Perlis', 'Pulau Pinang', 'Sabah', 'Sarawak', 'Selangor', 'Terengganu', 'W.P. Kuala Lumpur', 'W.P. Labuan', 'W.P. Putrajaya'],
    applicationLink: 'https://bsh.hasil.gov.my',
    deadline: '2024-12-31',
    maxIncome: 2208
  },
  {
    id: '2',
    name: 'Bantuan Pendidikan Tinggi (PTPTN)',
    category: 'Pendidikan',
    eligibility: [
      'Warganegara Malaysia',
      'Pelajar institusi pengajian tinggi',
      'Berumur di bawah 45 tahun'
    ],
    locations: ['Johor', 'Kedah', 'Kelantan', 'Melaka', 'Negeri Sembilan', 'Pahang', 'Perak', 'Perlis', 'Pulau Pinang', 'Sabah', 'Sarawak', 'Selangor', 'Terengganu', 'W.P. Kuala Lumpur', 'W.P. Labuan', 'W.P. Putrajaya'],
    applicationLink: 'https://www.ptptn.gov.my',
    deadline: '2024-12-31',
    employmentStatus: ['Pelajar']
  },
  {
    id: '3',
    name: 'Program Perumahan Rakyat (PPR)',
    category: 'Perumahan',
    eligibility: [
      'Warganegara Malaysia',
      'Pendapatan isi rumah RM3,000 dan ke bawah',
      'Berkeluarga atau sudah berkahwin'
    ],
    locations: ['Selangor', 'W.P. Kuala Lumpur', 'W.P. Putrajaya'],
    applicationLink: 'https://ehome.kpkt.gov.my',
    deadline: '2024-12-31',
    maxIncome: 3000
  },
  {
    id: '4',
    name: 'Skim Peduli Kesihatan (PeKa)',
    category: 'Kesihatan',
    eligibility: [
      'Warganegara Malaysia',
      'Pendapatan isi rumah RM4,000 dan ke bawah',
      'Berumur 40 tahun ke atas'
    ],
    locations: ['Johor', 'Kedah', 'Kelantan', 'Melaka', 'Negeri Sembilan', 'Pahang', 'Perak', 'Perlis', 'Pulau Pinang', 'Sabah', 'Sarawak', 'Selangor', 'Terengganu', 'W.P. Kuala Lumpur', 'W.P. Labuan', 'W.P. Putrajaya'],
    applicationLink: 'https://peka.gov.my',
    deadline: '2024-12-31',
    maxIncome: 4000
  },
  {
    id: '5',
    name: 'Bantuan Awal Persekolahan (BAP)',
    category: 'Pendidikan',
    eligibility: [
      'Warganegara Malaysia',
      'Pelajar sekolah rendah dan menengah',
      'Pendapatan isi rumah RM3,000 dan ke bawah'
    ],
    locations: ['Johor', 'Kedah', 'Kelantan', 'Melaka', 'Negeri Sembilan', 'Pahang', 'Perak', 'Perlis', 'Pulau Pinang', 'Sabah', 'Sarawak', 'Selangor', 'Terengganu', 'W.P. Kuala Lumpur', 'W.P. Labuan', 'W.P. Putrajaya'],
    applicationLink: 'https://bap.moe.gov.my',
    deadline: '2024-12-31',
    maxIncome: 3000,
    employmentStatus: ['Bekerja', 'Tidak Bekerja']
  },
  {
    id: '6',
    name: 'Bantuan Modal Perniagaan (BMP)',
    category: 'Kewangan',
    eligibility: [
      'Warganegara Malaysia',
      'Peniaga kecil atau mikro',
      'Pendapatan bulanan di bawah RM5,000'
    ],
    locations: ['Johor', 'Kedah', 'Kelantan', 'Melaka', 'Negeri Sembilan', 'Pahang', 'Perak', 'Perlis', 'Pulau Pinang', 'Sabah', 'Sarawak', 'Selangor', 'Terengganu', 'W.P. Kuala Lumpur', 'W.P. Labuan', 'W.P. Putrajaya'],
    applicationLink: 'https://bmp.tekun.gov.my',
    deadline: '2024-12-31',
    maxIncome: 5000,
    employmentStatus: ['Bekerja']
  }
];