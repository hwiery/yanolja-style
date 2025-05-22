import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  const item = await prisma.accommodation.findUnique({ where: { id } });
  if (!item) {
    return NextResponse.json({ message: '숙소를 찾을 수 없습니다.' }, { status: 404 });
  }
  if (item.stock <= 0) {
    return NextResponse.json({ message: '재고가 없습니다.' }, { status: 400 });
  }
  const updated = await prisma.accommodation.update({
    where: { id },
    data: { stock: { decrement: 1 } },
  });
  return NextResponse.json(updated);
} 