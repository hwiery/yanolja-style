/**
 * RecommendationSlider 컴포넌트
 * 모든 숙소 데이터를 불러와 가로 슬라이더 형태로 렌더링합니다.
 */
'use client';

import React, { useEffect, useState } from 'react';
import { fetchAccommodations, Accommodation } from '../lib/api';
import Card from './ui/Card';
import Link from 'next/link';

export default function RecommendationSlider() {
  const [items, setItems] = useState<Accommodation[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchAccommodations()
      .then(data => setItems(data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <div className="flex justify-center py-4">로딩 중...</div>;
  }
  if (error) {
    return <div className="flex justify-center py-4 text-red-500">{error}</div>;
  }

  return (
    <section className="overflow-x-auto py-4 px-4">
      <div className="flex gap-2">
        {items.map(item => (
          <Link href={`/accommodations/${item.id}`} key={item.id} className="block">
            <Card
              image={item.imageUrl}
              imageAlt={item.name}
              title={item.name}
              subtitle={item.location}
              price={item.price.toLocaleString()}
              className="min-w-[160px]"
            />
          </Link>
        ))}
      </div>
    </section>
  );
} 