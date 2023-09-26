const { sum, divide, multiply } = require('./02-math');

test('adds 1 + 3 should be 4', () => { // test scenario
  const answer = sum(1, 5);// resolve test
  expect(answer).toBe(6);// hipotesis
  // this test shouldn't pass
});

test('divide 10 / 2 should be 5', () => { // test scenario
  const answer = divide(10, 2);// resolve test
  expect(answer).toBe(5);// hipotesis
  // this test should pass
});

test('should multiply', () => { // test scenario
  const answer = multiply(4, 4); // resolve test

  expect(answer).toBe(16);// hipotesis
  // this test should pass
  const answer2 = multiply(5, 5);
  expect(answer2).toBe(25);
  // this test should pass
});

test('should multiply for zero', () => { // test scenario
  const answer = multiply(4, 0); // resolve test
  expect(answer).toBeNull();// hipotesis
  // this test should pass
  // const answer3 = multiply(5, 0);
  // expect(answer3).toBe(0);
  // this test shouldn't pass
  // because 0 !== null
});
