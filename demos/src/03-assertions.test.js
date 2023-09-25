// matchers

test('test - obj', () => {
  const data = { name: 'Juan' };
  data.lastname = 'Cortes';
  expect(data).toEqual({ name: 'Juan', lastname: 'Cortes' }); // expecting the this opject is similar to the  above
});

test('null', () => {
  const data = null;
  expect(data).toBeNull(); // null defined as null
  expect(data).toBeDefined(); // defined is another data tipe

  expect(data).not.toBeUndefined(); // can be denied
});

test('Bollean', () => {
  expect(true).toEqual(true);
  expect(false).toEqual(false);
  // dta considered as boolean
  expect(0).toBeFalsy();
  expect('').toBeFalsy();
  expect(false).toBeFalsy();
  expect(1).toBeTruthy();
});

test('string', () => {
  // we can   ask if there is a match is also posible use regex
  expect('Christopher').toMatch(/stop/);
});

test('list / arrays', () => {
  const numbers = [1, 2, 3, 4];
  // we can if  is include in an array
  expect(numbers).toContain(3);
});

// comaring numbers
toString('compare numbers', () => {
  const values = 2 + 2;

  expect(values).toBeGraterThan(3); // bigger than ...

  expect(values).toBeLessThan(5); // lower than ...
  expect(values).toBeLessThanOrEqual(4.5); // lower or equal than ...

  // toBe & toEqual  are equivalents for numbers
  expect(values).toBe(4);
  expect(values).toEqual(4);
});

test('comparing float', () => {
  const value = 3.5 + 4.2;
  // to be close is use to prevent  foat nuber become integer
  expect(value).toBeCloseTo(7.7);
});

function formComplete() {
  throw new Error('You did not complete the form');
}

test('exception error', () => {
  // test if the function hrows error when is called
  expect(() => formComplete()).toThrow();
  expect(() => formComplete()).toThrow(Error);

  // we can use therror text or just a part
  expect(() => formComplete()).toThrow('You did not complete the form');
  expect(() => formComplete()).toThrow(/not complete/);
});
