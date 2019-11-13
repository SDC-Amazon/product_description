const cassandra = require('cassandra-driver');
const faker = require('faker');
const debug = require('debug')('anything');
const client = new cassandra.Client({ contactPoints: ['localhost:9042'], localDataCenter: 'datacenter1', keyspace: 'test' });

client.connect( (err) => {
  if (err) {
    console.error(err);
  } else {
    debug('connected to localhost cassandra - ');
    getItem();
  }
});

// Batching the startup queries didn't work out for some reason ... ?
// const startupQueries = [
//   { query: 'CREATE KEYSPACE IF NOT EXISTS farmazon with replication = { \'class\' : \'NetworkTopologyStrategy\', \'datacenter1\' : 3 };' },
//   { query: 'CREATE TABLE IF NOT EXISTS farmazon.pd (id int PRIMARY KEY, title text, seller text, stars int, ratings int, prime boolean, options list<text>, prices list<text>, description text);'},
//   { query: 'USE farmazon;'}
// ];
// client.batch(startupQueries)
//   .then(() => {
//     console.log('keyspace and table started');
//   })
//   .catch(() => {
//     console.error('failed keyspace and table startup');
//   });

  // create table farmazon.pd 
  // (id int PRIMARY KEY, title text, seller text, stars int,
  // ratings int, prime boolean, options list<text>, prices list<text>, description text);

  /* farmazon.pd Schema
  pd {
    id (int) [PK]
    title (text)
    seller (text)
    stars (int)
    ratings (int)
    prime (boolean)
    options (list<text>)
    prices (list<text>)
    description (text)
  } */

// the batch method doesn't improve efficiency of the insert by any means
// Batch is simply a way to make multiple queries at once
// Each query will run in the same amount of time... USE JSON!
/* const batchRecords = (i) => {
  const query = 'INSERT INTO pd (id, title, seller, \
    stars, ratings, prime, options, prices, description) \
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
  const queries = [];
  for (i; i > 0; i--) {
    queries.push({
      query,
      params: [
        i,
        faker.commerce.productName(),
        faker.company.companyName(),
        Math.floor(Math.random() * 5),
        Math.floor(Math.random() * 2000),
        Boolean(Math.round(Math.random())),
        ['S', 'M', 'L'],
        [faker.commerce.price(), faker.commerce.price(), faker.commerce.price()],
        faker.commerce.color()
      ],
    });
  }
  client.batch(queries, { prepare: true })
    .then(() => {
      console.log('batch complete');
    })
    .catch(error => {
      console.error(error);
    });
}; */




// ~~~~~3:25PM -> 3:30PM ~ 1 Million Records
// ~~~~~4:49PM ->
// ~~~~~Insert 99999 per cycle
const seedDb = (i = 0, seedCount = 1) => {
  if (seedCount === 100) {
    console.log('seeding complete');
    return;
  }
  let qtyStop = seedCount * 99999
  let record = {
    id: i,
    title: faker.commerce.productName(),
    seller: faker.company.companyName(),
    stars: Math.floor(Math.random() * 5),
    ratings: Math.floor(Math.random() * 2000),
    prime: Boolean(Math.round(Math.random())),
    options: ['S', 'M', 'L'],
    prices: [faker.commerce.price(), faker.commerce.price(), faker.commerce.price()],
    description: faker.commerce.color()
  };

  client.execute('INSERT INTO pd JSON ?;', [JSON.stringify(record)], { prepare: true })
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
// seedDb();
let counter = 0;
const getItem = (productId = 1, callback = () => {
  console.timeEnd();
  counter++;
  if (counter < 100) {
    getItem(Math.floor(Math.random() * (9989002)));
  }
}) => {
  console.time();
  client.execute('SELECT * FROM pd WHERE id = ?', [productId], { prepare: true })
    .then(results => {
      callback(null, results);
    })
    .catch(error => {
      callback(error, null);
    });
}
module.exports = { getItem };