/**
 * SearchResults 컴포넌트
 * 검색어에 맞는 숙소 목록을 표시합니다.
 */
'use client';

import React, { useEffect, useState } from 'react';
import Card from './ui/Card';
import Link from 'next/link';
import { Accommodation } from '../lib/api';

interface SearchResultsProps {
  searchTerm: string;
}

export default function SearchResults({ searchTerm }: SearchResultsProps) {
  const [results, setResults] = useState<Accommodation[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!searchTerm) {
      setResults([]);
      return;
    }
    setLoading(true);
    setError(null);
    fetch(`/api/accommodations?search=${encodeURIComponent(searchTerm)}`)
      .then(res => {
        if (!res.ok) throw new Error('검색 중 오류가 발생했습니다.');
        return res.json();
      })
      .then(data => setResults(data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, [searchTerm]);

  if (!searchTerm) return null;
  if (loading) return <div className="flex justify-center py-4">로딩 중...</div>;
  if (error) return <div className="flex justify-center py-4 text-red-500">{error}</div>;
  if (results.length === 0) return <div className="flex justify-center py-4">검색 결과가 없습니다.</div>;

  return (
    <section className="grid grid-cols-2 gap-2 p-4">
      {results.map(item => (
        <Link href={`/accommodations/${item.id}`} key={item.id} className="block">
          <Card
            image={item.imageUrl}
            imageAlt={item.name}
            title={item.name}
            subtitle={item.location}
            price={item.price.toLocaleString()}
          />
        </Link>
      ))}
    </section>
  );
} 