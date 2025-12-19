'use client';

import { useState, useEffect } from 'react';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebounce } from '@/hooks/useDebounce';

export default function JobSearch() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const [searchTerm, setSearchTerm] = useState(searchParams.get('q')?.toString() || '');

  const debouncedTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    const currentQuery = searchParams.get('q')?.toString() || '';

    // guard to prevent Infinite loop 
    if (debouncedTerm == currentQuery) return;

    const params = new URLSearchParams(searchParams);

    if (debouncedTerm) {
      params.set('q', debouncedTerm);
    } else {
      params.delete('q');
    }

    replace(`${pathname}?${params.toString()}`);

  }, [debouncedTerm, replace, pathname, searchParams]);

  return (
    <div className="mt-8 max-w-md mx-auto">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
          <svg className="w-4 h-4 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
          </svg>
        </div>

        <input
          id='job-search'
          name='job-search'
          type="text"
          className="block w-full px-4 py-3 pl-11 text-sm text-gray-900 border border-gray-200 rounded-lg bg-white hover:border-gray-300 focus:border-gray-400 focus:ring-0 outline-none transition-colors duration-300 placeholder-gray-400"
          placeholder="Cari posisi, perusahaan..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </div>
  );
}