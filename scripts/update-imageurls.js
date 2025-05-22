const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  const accommodations = await prisma.accommodation.findMany();
  for (const item of accommodations) {
    const url = `https://picsum.photos/seed/${item.id}/400/300`;
    await prisma.accommodation.update({ where: { id: item.id }, data: { imageUrl: url } });
  }
  console.log('Updated imageUrl for all accommodations');
  await prisma.$disconnect();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
}); 