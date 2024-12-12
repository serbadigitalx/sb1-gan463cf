import { useState, useEffect } from 'react';
import { BantuanKerajaan } from '../types';
import { airtableService } from '../lib/airtable';

export function useBantuan() {
  const [bantuan, setBantuan] = useState<BantuanKerajaan[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetchBantuan();
  }, []);

  const fetchBantuan = async () => {
    try {
      setLoading(true);
      const data = await airtableService.getAllBantuan();
      setBantuan(data);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to fetch bantuan'));
    } finally {
      setLoading(false);
    }
  };

  const createBantuan = async (newBantuan: Omit<BantuanKerajaan, 'id'>) => {
    try {
      const created = await airtableService.createBantuan(newBantuan);
      setBantuan(prev => [...prev, created]);
      return created;
    } catch (err) {
      throw err instanceof Error ? err : new Error('Failed to create bantuan');
    }
  };

  const updateBantuan = async (id: string, updates: Partial<BantuanKerajaan>) => {
    try {
      const updated = await airtableService.updateBantuan(id, updates);
      setBantuan(prev => prev.map(item => item.id === id ? updated : item));
      return updated;
    } catch (err) {
      throw err instanceof Error ? err : new Error('Failed to update bantuan');
    }
  };

  const deleteBantuan = async (id: string) => {
    try {
      await airtableService.deleteBantuan(id);
      setBantuan(prev => prev.filter(item => item.id !== id));
    } catch (err) {
      throw err instanceof Error ? err : new Error('Failed to delete bantuan');
    }
  };

  return {
    bantuan,
    loading,
    error,
    refresh: fetchBantuan,
    createBantuan,
    updateBantuan,
    deleteBantuan
  };
}