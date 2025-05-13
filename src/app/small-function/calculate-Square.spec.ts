import { calculateSquare } from './calculate-Square';
describe('calculateSquare', () => {
  it('should return the square of a number', () => {
    const inputNumber = 5;
    const expectedResult = 25;
    const result = calculateSquare(inputNumber);
    expect(result).toBe(expectedResult);
  });

  it('should return NaN for non-number input', () => {
    const inputString = 'abc';
    const result = calculateSquare(inputString);
    expect(result).toBeNaN();
  });

  it('should return NaN for null input', () => {
    const inputNull = null;
    const result = calculateSquare(inputNull);
    expect(result).toBeNaN();
  });
});