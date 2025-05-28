import { getBaseUrl } from '@/config/envConfig';

export const baseUrl = getBaseUrl();
export const baseUrlV2 = process.env.NEXT_PUBLIC_API_URL_V2 || 'http://localhost:4000';
