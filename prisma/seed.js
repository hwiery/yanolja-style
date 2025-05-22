/**
 * DB 시드 스크립트
 * CSV로부터 더미 숙소 데이터를 읽어와 데이터베이스에 삽입합니다.
 */
const { PrismaClient } = require('@prisma/client');
const fs = require('fs');
const path = require('path');

async function main() {
  const prisma = new PrismaClient();
  const csvPath = path.join(__dirname, 'data', 'accommodations.csv');
  const content = fs.readFileSync(csvPath, 'utf-8');
  const [header, ...lines] = content.split('\n').filter(Boolean);

  for (const line of lines) {
    // CSV를 안전하게 파싱 (필드 내 쉼표 문제 방지)
    const parts = line.split(',');
    const name = parts[0].trim();
    const location = parts[1]?.trim() || '';
    const description = parts[2]?.trim() || '';
    const priceStr = parts[3]?.trim() || '0';
    const rawImageUrl = parts.slice(4).join(',').trim();
    // public 디렉토리 경로를 Next.js static public 경로로 변환
    let imageUrl = rawImageUrl;
    if (imageUrl.startsWith('public/')) {
      imageUrl = '/' + imageUrl.slice('public/'.length);
    }
    await prisma.accommodation.create({
      data: {
        name,
        location,
        description,
        price: parseInt(priceStr, 10),
        imageUrl,
      }
    });
  }

  await prisma.$disconnect();
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  }); 