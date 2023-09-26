describe('Set', () => {
  beforeAll(() => {
    console.log('beforeAll');
    // DB up
  });
  afterAll(() => {
    console.log('afterAll');
    // DB down
  });
  beforeEach(() => {
    console.log('beforeEach');
    // runs before every test
  });
  afterEach(() => {
    console.log('beforeEach');
    // runs after every test
  });
  test('case 1', () => {
    console.log('case 1');
    expect(1 + 1).toBe(2);
  });
  test('case 2', () => {
    console.log('case 2');
    expect(1 + 3).toBe(4);
  });

  describe('group 2', () => {
    beforeAll(() => {
      console.log('beforeAll  group 2');
      // can be use to star  a database DB up
    });
    test('case 3', () => {
      console.log('case 3');
      expect(1 + 4).toBe(5);
    });
    test('case 4', () => {
      console.log('case 4');
      expect(1 + 1).toBe(2);
    });
  });
});
