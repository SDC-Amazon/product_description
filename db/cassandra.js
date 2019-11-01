const cassandra = require('cassandra-driver');
const faker = require('faker');
const client = new cassandra.Client({ contactPoints: ['localhost:9042'], localDataCenter: 'datacenter1', keyspace: 'farmazon' });

client.connect( (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('connected to localhost cassandra - ');
  }
});

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
  
  const insertRecord = (i) => {
    const queryString = 'INSERT INTO pd (id, title, seller, \
      stars, ratings, prime, options, prices, description) \
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
    const values = [
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
    Promise.all(values)
      .then(values => {
        client.execute(queryString, values);
      })
      .catch(error => {
        console.error(error);
      });
  };
  insertRecord(12000000);
