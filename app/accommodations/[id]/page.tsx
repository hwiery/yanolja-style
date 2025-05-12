import React from 'react';
import { PrismaClient } from '@prisma/client';
import Image from 'next/image';
import Link from 'next/link';

const prisma = new PrismaClient();

interface AccommodationDetailProps {
  params: { id: string };
}

export default async function AccommodationPage({ params }: AccommodationDetailProps) {
  const { id } = params;
  const accommodation = await prisma.accommodation.findUnique({ where: { id } });
  if (!accommodation) {
    return <div className="p-4 text-center">숙소를 찾을 수 없습니다.</div>;
  }

  return (
    <main className="p-4 max-w-2xl mx-auto">
      <Link href="/" className="text-blue-500">← 홈으로 돌아가기</Link>
      <h1 className="text-2xl font-bold mt-4">{accommodation.name}</h1>
      <div className="relative w-full h-64 mt-4 rounded-lg overflow-hidden">
        <Image
          src={accommodation.imageUrl}
          alt={accommodation.name}
          fill
          className="object-cover"
        />
      </div>
      <p className="mt-4 text-gray-700">위치: {accommodation.location}</p>
      <p className="mt-2 text-gray-700">{accommodation.description}</p>
      <p className="mt-2 text-lg font-bold">가격: {accommodation.price.toLocaleString()}원</p>
      <button className="mt-4 px-4 py-2 bg-primary text-white rounded-lg">예약하기</button>
    </main>
  );
} 