import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(_request: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  // 입력 검증: UUID 형식 확인 (OWASP 권장)
  const uuidRegex = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
  if (!uuidRegex.test(id)) {
    return NextResponse.json({ error: 'Invalid ID format' }, { status: 400 });
  }
  try {
    const accommodation = await prisma.accommodation.findUnique({ where: { id } });
    if (!accommodation) {
      return NextResponse.json({ message: 'Not Found' }, { status: 404 });
    }
    return NextResponse.json(accommodation);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
} 