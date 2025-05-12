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
    const [name, location, description, price, rawImageUrl] = line.split(',');
    // public 디렉토리 경로를 Next.js static public 경로로 변환 ('public/' 제거, 앞에 '/' 추가)
    let imageUrl = rawImageUrl.trim();
    if (imageUrl.startsWith('public/')) {
      imageUrl = '/' + imageUrl.slice('public/'.length);
    }
    await prisma.accommodation.create({
      data: {
        name,
        location,
        description,
        price: parseInt(price, 10),
        imageUrl,
      },
    });
  }

  await prisma.$disconnect();
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  }); 