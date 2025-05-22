'use client';
import React, { useEffect, useState } from 'react';
import { fetchAccommodations, Accommodation } from '../lib/api';
import Card from './ui/Card';
import Link from 'next/link';

export default function PopularSection() {
  const [items, setItems] = useState<Accommodation[]>([]);
  useEffect(() => {
    fetchAccommodations()
      .then(data => {
        const popularItems = [...data]
          .sort((a, b) => b.price - a.price)
          .slice(0, 10);
        setItems(popularItems);
      })
      .catch(console.error);
  }, []);

  return (
    <section className="py-6">
      <h2 className="text-xl font-bold px-4">인기 섹션</h2>
      <div className="overflow-x-auto flex gap-3 p-4">
        {items.map(item => (
          <Link href={`/accommodations/${item.id}`} key={item.id} className="block min-w-[150px]">
            <Card
              image={item.imageUrl}
              imageAlt={item.name}
              title={item.name}
              subtitle={item.location}
              price={item.price.toLocaleString()}
            />
          </Link>
        ))}
      </div>
    </section>
  );
} 