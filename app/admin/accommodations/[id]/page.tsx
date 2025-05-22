import React from 'react';
import { PrismaClient } from '@prisma/client';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const prisma = new PrismaClient();

interface AdminAccommodationProps {
  params: { id: string };
}

export default async function AdminAccommodationPage({ params }: AdminAccommodationProps) {
  const item = await prisma.accommodation.findUnique({ where: { id: params.id } });
  if (!item) {
    return notFound();
  }

  return (
    <main className="p-4 max-w-2xl mx-auto">
      <Link href="/admin" className="text-blue-500 underline">← 관리자 홈으로</Link>
      <h1 className="text-2xl font-bold mt-4">{item.name}</h1>
      <div className="relative w-full h-64 mt-4 rounded-lg overflow-hidden">
        <Image
          src={item.imageUrl}
          alt={item.name}
          fill
          className="object-cover"
        />
      </div>
      <p className="mt-4">위치: {item.location}</p>
      <p className="mt-2">{item.description}</p>
      <p className="mt-2">가격: {item.price.toLocaleString()}원</p>
      <p className="mt-2">재고: {(item as any).stock ?? 'N/A'}</p>
    </main>
  );
} 