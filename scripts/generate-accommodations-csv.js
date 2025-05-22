const fs = require('fs');
const path = require('path');
const { faker } = require('@faker-js/faker');

// Generate fresh 100 accommodations entries to CSV
(function () {
  const csvPath = path.resolve(__dirname, '../prisma/data/accommodations.csv');
  const header = 'name,location,description,price,image_url';
  const lines = [];

  for (let i = 0; i < 100; i++) {
    const name = `${faker.company.name().replace(/,/g, '')} Hotel`;
    const location = faker.location.city().replace(/,/g, '');
    const description = faker.lorem.sentence().replace(/,/g, '');
    const price = faker.number.int({ min: 30000, max: 300000 });
    const image_url = `https://source.unsplash.com/random/800x600?hotel&sig=${faker.number.int()}`;
    lines.push(`${name},${location},${description},${price},${image_url}`);
  }

  const content = [header, ...lines].join('\n');
  fs.writeFileSync(csvPath, content, 'utf-8');
  console.log('Generated fresh 100 accommodations entries in accommodations.csv');
})(); 