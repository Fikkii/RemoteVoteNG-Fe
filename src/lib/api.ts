// API helper for RemoteVote NG connecting to Django REST Framework backend

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api';

export interface Voter {
  username: string; // NIN
  full_name: string;
  email: string;
  state: string;
  lga: string;
  is_verified: boolean;
  language: string;
  role?: string;
  staff_number?: string;
}

export interface Candidate {
  id: string;
  name: string;
  party: string;
  party_abbr: string;
  party_logo?: string | null;
  color: string;
  manifesto: string;
  running_mate?: string;
  votes_count: number;
}

export interface Election {
  id: string;
  title: string;
  date: string;
  status: 'active' | 'upcoming' | 'closed';
  candidates: Candidate[];
  has_voted: boolean;
}

export function getAuthToken(): string | null {
  if (typeof window === 'undefined') return null;
  return window.localStorage.getItem('rvng.token');
}

export function setAuthToken(token: string | null) {
  if (typeof window === 'undefined') return;
  if (token) {
    window.localStorage.setItem('rvng.token', token);
  } else {
    window.localStorage.removeItem('rvng.token');
  }
}

export async function apiRequest<T = any>(
  endpoint: string,
  method: 'GET' | 'POST' | 'PATCH' | 'DELETE' = 'GET',
  body?: any
): Promise<T> {
  const url = `${API_BASE_URL}${endpoint}`;
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };

  const token = getAuthToken();
  if (token) {
    headers['Authorization'] = `Token ${token}`;
  }

  const options: RequestInit = {
    method,
    headers,
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  const response = await fetch(url, options);

  if (response.status === 401) {
    // Unauthorized: Clear token and redirect to login if appropriate
    setAuthToken(null);
  }

  const data = await response.json();

  if (!response.ok) {
    const errorMessage = data.error || data.detail || Object.values(data).flat().join(', ') || 'An error occurred';
    throw new Error(errorMessage);
  }

  return data;
}
