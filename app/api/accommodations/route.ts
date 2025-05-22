import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const search = searchParams.get('search');
    // 입력 검증: 검색어 길이 및 형식
    if (search && (search.length > 100 || !/^[\w\s-]+$/.test(search))) {
      return NextResponse.json({ error: 'Invalid search format' }, { status: 400 });
    }
    let accommodations;
    if (search) {
      accommodations = await prisma.accommodation.findMany({
        where: {
          OR: [
            { name: { contains: search, mode: 'insensitive' } },
            { location: { contains: search, mode: 'insensitive' } },
          ],
        },
      });
    } else {
      accommodations = await prisma.accommodation.findMany();
    }
    return NextResponse.json(accommodations);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
} 