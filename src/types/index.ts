export type EmploymentStatus = 'Bekerja' | 'Tidak Bekerja' | 'Pelajar';

export type AssistanceType = 'Kewangan' | 'Pendidikan' | 'Perumahan' | 'Kesihatan';

export type MalaysianState =
  | 'Johor'
  | 'Kedah'
  | 'Kelantan'
  | 'Melaka'
  | 'Negeri Sembilan'
  | 'Pahang'
  | 'Perak'
  | 'Perlis'
  | 'Pulau Pinang'
  | 'Sabah'
  | 'Sarawak'
  | 'Selangor'
  | 'Terengganu'
  | 'W.P. Kuala Lumpur'
  | 'W.P. Labuan'
  | 'W.P. Putrajaya';

export interface UserInput {
  name: string;
  age: number;
  income: number;
  employmentStatus: EmploymentStatus;
  location: MalaysianState;
  assistanceType: AssistanceType;
}

export interface BantuanKerajaan {
  id: string;
  name: string;
  category: AssistanceType;
  eligibility: string[];
  locations: MalaysianState[];
  applicationLink: string;
  deadline: string;
  minIncome?: number;
  maxIncome?: number;
  employmentStatus?: EmploymentStatus[];
}