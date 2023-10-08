const request = require('supertest');

const createApp = require('../src/app'); // create an app using ex[ress]

describe('test for hello end point', () => {
  let app = null;
  let server = null;
  beforeAll(() => {
    app = createApp();
    server = app.listen(3001);
  });

  afterAll(async () => {
    await server.close(); // this is always async
  });

  describe('test for [GET] /', () => {
    test('should return "hello there"', () => request(app)
      .get('/')
      .expect(200)
      .then((response) => {
        expect(response.text).toEqual('Hello There!');
      }));
  });
});
