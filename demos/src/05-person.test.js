const Person = require('./05-person');

describe('test for person', () => {
  let person;
  beforeEach(() => {
    person = new Person('Juan', 79, 1.82);
  });

  test('should return down', () => {
    person.weight = 79;
    const imc = person.calcIMC();
    expect(imc).toBe('normal');
  });

  test('should return overweight level-1', () => {
    person.weight = 90;
    const imc = person.calcIMC();
    expect(imc).toBe('overweight level 1');
  });
});
