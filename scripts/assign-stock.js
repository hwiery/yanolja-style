const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  const accommodations = await prisma.accommodation.findMany();
  for (const item of accommodations) {
    const stock = Math.floor(Math.random() * 20) + 1; // 1~20 random stock
    await prisma.accommodation.update({ where: { id: item.id }, data: { stock } });
  }
  console.log('Assigned random stock to all accommodations');
  await prisma.$disconnect();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
}); 