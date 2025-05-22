/**
 * SearchBar 컴포넌트
 * 입력값을 디바운스하여 부모 컴포넌트에 검색어를 전달합니다.
 */
'use client';

import React, { useState, useEffect } from 'react';

interface SearchBarProps {
  onSearch: (term: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [input, setInput] = useState<string>('');

  useEffect(() => {
    const handler = setTimeout(() => {
      onSearch(input.trim());
    }, 300);
    return () => clearTimeout(handler);
  }, [input, onSearch]);

  return (
    <div className="p-4">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="숙소 검색"
        className="w-full px-4 py-2 border rounded-lg"
      />
    </div>
  );
} 