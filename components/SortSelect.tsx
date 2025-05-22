/**
 * SortSelect 컴포넌트
 * 숙소 목록 정렬 옵션을 선택하는 드롭다운을 제공합니다.
 */
'use client';

import React from 'react';

interface SortSelectProps {
  selected: string;
  onChange: (option: string) => void;
}

export default function SortSelect({ selected, onChange }: SortSelectProps) {
  return (
    <div className="p-4">
      <select
        value={selected}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-3 py-2 border rounded-lg"
      >
        <option value="">정렬 없음</option>
        <option value="price_asc">가격 오름차순</option>
        <option value="price_desc">가격 내림차순</option>
      </select>
    </div>
  );
} 