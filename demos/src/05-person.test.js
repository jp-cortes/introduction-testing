const Person = require('./05-person');
// AAA
// Arrange / Given
// Act / When
// Assert / then
describe('test for person', () => {
  let person;
  // Arrange
  // preparing an instace for every single test
  beforeEach(() => {
    person = new Person('Juan', 79, 1.82);
  });

  test('should return down', () => {
    // Arrange
    person.weight = 79;
    // Act
    const imc = person.calcIMC();
    // Assert
    expect(imc).toBe('normal');
  });

  test('should return overweight level-1', () => {
    person.weight = 90;
    const imc = person.calcIMC();
    expect(imc).toBe('overweight level 1');
  });
});
