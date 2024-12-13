import { BantuanKerajaan } from '../types';

export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/\s+/g, '-')     // Replace spaces with -
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
    .replace(/\-\-+/g, '-')   // Replace multiple - with single -
    .replace(/^-+/, '')       // Trim - from start of text
    .replace(/-+$/, '');      // Trim - from end of text
}

export function getBantuanBySlug(slug: string, bantuanList: BantuanKerajaan[]): BantuanKerajaan | undefined {
  return bantuanList.find(bantuan => generateSlug(bantuan.name) === slug);
}