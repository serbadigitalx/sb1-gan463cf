import Airtable from 'airtable';
import { BantuanKerajaan } from '../types';

// Initialize Airtable
const base = new Airtable({
  apiKey: import.meta.env.VITE_AIRTABLE_API_KEY
}).base(import.meta.env.VITE_AIRTABLE_BASE_ID);

const BANTUAN_TABLE = 'Bantuan Kerajaan';

export const airtableService = {
  // Fetch all bantuan records
  async getAllBantuan(): Promise<BantuanKerajaan[]> {
    try {
      const records = await base(BANTUAN_TABLE).select().all();
      return records.map(record => ({
        id: record.id,
        name: record.get('Name') as string,
        category: record.get('Category') as BantuanKerajaan['category'],
        eligibility: (record.get('Eligibility') as string).split('\n'),
        locations: record.get('Locations') as BantuanKerajaan['locations'],
        applicationLink: record.get('ApplicationLink') as string,
        deadline: record.get('Deadline') as string,
        minIncome: record.get('MinIncome') as number,
        maxIncome: record.get('MaxIncome') as number,
        employmentStatus: record.get('EmploymentStatus') as BantuanKerajaan['employmentStatus']
      }));
    } catch (error) {
      console.error('Error fetching bantuan:', error);
      throw error;
    }
  },

  // Create new bantuan record
  async createBantuan(bantuan: Omit<BantuanKerajaan, 'id'>): Promise<BantuanKerajaan> {
    try {
      const record = await base(BANTUAN_TABLE).create({
        Name: bantuan.name,
        Category: bantuan.category,
        Eligibility: bantuan.eligibility.join('\n'),
        Locations: bantuan.locations,
        ApplicationLink: bantuan.applicationLink,
        Deadline: bantuan.deadline,
        MinIncome: bantuan.minIncome,
        MaxIncome: bantuan.maxIncome,
        EmploymentStatus: bantuan.employmentStatus
      });

      return {
        id: record.id,
        name: record.get('Name') as string,
        category: record.get('Category') as BantuanKerajaan['category'],
        eligibility: (record.get('Eligibility') as string).split('\n'),
        locations: record.get('Locations') as BantuanKerajaan['locations'],
        applicationLink: record.get('ApplicationLink') as string,
        deadline: record.get('Deadline') as string,
        minIncome: record.get('MinIncome') as number,
        maxIncome: record.get('MaxIncome') as number,
        employmentStatus: record.get('EmploymentStatus') as BantuanKerajaan['employmentStatus']
      };
    } catch (error) {
      console.error('Error creating bantuan:', error);
      throw error;
    }
  },

  // Update existing bantuan record
  async updateBantuan(id: string, updates: Partial<BantuanKerajaan>): Promise<BantuanKerajaan> {
    try {
      const record = await base(BANTUAN_TABLE).update(id, {
        ...(updates.name && { Name: updates.name }),
        ...(updates.category && { Category: updates.category }),
        ...(updates.eligibility && { Eligibility: updates.eligibility.join('\n') }),
        ...(updates.locations && { Locations: updates.locations }),
        ...(updates.applicationLink && { ApplicationLink: updates.applicationLink }),
        ...(updates.deadline && { Deadline: updates.deadline }),
        ...(updates.minIncome && { MinIncome: updates.minIncome }),
        ...(updates.maxIncome && { MaxIncome: updates.maxIncome }),
        ...(updates.employmentStatus && { EmploymentStatus: updates.employmentStatus })
      });

      return {
        id: record.id,
        name: record.get('Name') as string,
        category: record.get('Category') as BantuanKerajaan['category'],
        eligibility: (record.get('Eligibility') as string).split('\n'),
        locations: record.get('Locations') as BantuanKerajaan['locations'],
        applicationLink: record.get('ApplicationLink') as string,
        deadline: record.get('Deadline') as string,
        minIncome: record.get('MinIncome') as number,
        maxIncome: record.get('MaxIncome') as number,
        employmentStatus: record.get('EmploymentStatus') as BantuanKerajaan['employmentStatus']
      };
    } catch (error) {
      console.error('Error updating bantuan:', error);
      throw error;
    }
  },

  // Delete bantuan record
  async deleteBantuan(id: string): Promise<void> {
    try {
      await base(BANTUAN_TABLE).destroy(id);
    } catch (error) {
      console.error('Error deleting bantuan:', error);
      throw error;
    }
  }
};