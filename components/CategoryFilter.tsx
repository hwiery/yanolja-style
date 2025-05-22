/**
 * CategoryFilter 컴포넌트
 * 숙소 목록에서 고유한 위치(카테고리)를 가져와 필터링 UI를 제공합니다.
 */
'use client';

import React, { useEffect, useState } from 'react';
import { fetchAccommodations, Accommodation } from '../lib/api';

interface CategoryFilterProps {
  selected: string | null;
  onSelect: (category: string | null) => void;
}

export default function CategoryFilter({ selected, onSelect }: CategoryFilterProps) {
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchAccommodations()
      .then(data => {
        const unique = Array.from(new Set(data.map((item: Accommodation) => item.location)));
        setCategories(unique);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <div className="flex justify-center py-4">카테고리 로딩 중...</div>;
  }

  return (
    <div className="flex flex-wrap gap-2 p-4">
      {categories.map(cat => (
        <button
          key={cat}
          className={`px-3 py-1 rounded-full whitespace-nowrap ${
            selected === cat ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700'
          }`}
          onClick={() => onSelect(selected === cat ? null : cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
} 