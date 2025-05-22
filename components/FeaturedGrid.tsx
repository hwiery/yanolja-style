/**
 * FeaturedGrid 컴포넌트
 * 상위 4개 숙소를 그리드 형태로 렌더링합니다.
 */
'use client';

import React, { useEffect, useState } from 'react';
import { fetchAccommodations, Accommodation } from '../lib/api';
import Card from './ui/Card';
import Link from 'next/link';

interface FeaturedGridProps {
  category?: string | null;
  sortOption?: string;
}

export default function FeaturedGrid({ category, sortOption }: FeaturedGridProps) {
  const [items, setItems] = useState<Accommodation[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchAccommodations()
      .then(data => {
        const filtered = category ? data.filter(item => item.location === category) : data;
        let processed = filtered;
        if (sortOption === 'price_asc') {
          processed = [...filtered].sort((a, b) => a.price - b.price);
        } else if (sortOption === 'price_desc') {
          processed = [...filtered].sort((a, b) => b.price - a.price);
        }
        setItems(processed.slice(0, 4));
      })
      .catch(err => {
        console.error(err);
        setError(err.message);
      })
      .finally(() => setLoading(false));
  }, [category, sortOption]);

  if (loading) {
    return <div className="flex justify-center py-4">로딩 중...</div>;
  }
  if (error) {
    return <div className="flex justify-center py-4 text-red-500">{error}</div>;
  }

  return (
    <section className="grid grid-cols-2 gap-2 p-4">
      {items.map(item => (
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