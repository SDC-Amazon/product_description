const pg = require('pg');
const debug = require('debug')('postgreSQL');
const faker = require('faker');

const client = new pg.Client({database: 'farmazon'});
client.connect()
  .then(() => {
    debug('connected to db');
  })
  .catch(err => {
    debug(err);
  });

const seedQuery = 'INSERT INTO pd(id, title, seller, stars, ratings, prime, options, prices, description) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9);';
// client.connect()
//   .then(() => {
//     debug('connected to db');
//   })
//   .catch(error => {
//     debug(error)
//   });

const seedDb = (i = 0, seedCount = 1) => {
  if (seedCount === 100) {
    console.log('seeding complete');
    return;
  }
  let qtyStop = seedCount * 100000;
  let record = [
    i,
    faker.commerce.productName(),
    faker.company.companyName(),
    Math.floor(Math.random() * 5),
    Math.floor(Math.random() * 2000),
    Boolean(Math.round(Math.random())),
    ['S', 'M', 'L'],
    [faker.commerce.price(), faker.commerce.price(), faker.commerce.price()],
    faker.commerce.color()
  ];
  client.query(seedQuery, record)
    .then(() => {
      if (i <= qtyStop) {
        seedDb(i+1, seedCount);
      } else {
        debug(`${qtyStop} finished`);
        seedDb(qtyStop+1, seedCount + 1);
      }
    })
    .catch(error => {
      console.error(error);
    });
}
seedDb();


