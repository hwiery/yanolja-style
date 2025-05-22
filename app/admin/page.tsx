import React from 'react';
import Link from 'next/link';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function AdminPage() {
  const accommodations = await prisma.accommodation.findMany();
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">관리자 상품 리스트</h1>
      <table className="min-w-full border-collapse">
        <thead>
          <tr>
            <th className="border px-2 py-1">이름</th>
            <th className="border px-2 py-1">위치</th>
            <th className="border px-2 py-1">가격</th>
            <th className="border px-2 py-1">재고</th>
          </tr>
        </thead>
        <tbody>
          {accommodations.map(item => (
            <tr key={item.id} className="hover:bg-gray-100">
              <td className="border px-2 py-1">
                <Link href={`/admin/accommodations/${item.id}`}>{item.name}</Link>
              </td>
              <td className="border px-2 py-1">{item.location}</td>
              <td className="border px-2 py-1">{item.price.toLocaleString()}원</td>
              <td className="border px-2 py-1">{item.stock ?? 'N/A'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
} 