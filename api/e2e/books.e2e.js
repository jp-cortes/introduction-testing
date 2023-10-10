const request = require('supertest');
const { MongoClient } = require('mongodb');

const createApp = require('../src/app');
const { config } = require('../src/config');

const DB_NAME = config.dbName;
const MONGO_URI = config.dbUrl;

describe('test for books', () => {
  let app = null;
  let server = null;
  let dataBase = null;

  beforeAll(async () => {
    app = createApp();
    server = app.listen(3002);// the port for test may be different from the one in production
    const client = new MongoClient(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await client.connect();
    dataBase = client.db(DB_NAME);
  });

  afterAll(async () => {
    await server.close();
    await dataBase.dropDatabase();
  });

  describe('test for GET /api/v1/books', () => {
    test('sholud return a list of books', async () => {
      // Arrange
      const seedData = await dataBase.collection('books').insertMany([
        {
          name: 'Book1',
          year: 1998,
          author: 'Jhonny',
        },
        {
          name: 'Book2',
          year: 1998,
          author: 'Jhonny',
        },
      ]);
      // Act
      return request(app)
        .get('/api/v1/books')
        .expect(200)
        .then(({ body }) => {
          console.log(body);
          // Assert
          expect(body.length).toEqual(seedData.insertedCount);
        });
    });
  });
});
