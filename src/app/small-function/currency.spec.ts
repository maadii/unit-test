import { currency } from "./currency";
describe('currency', () => {
    it('should return an array of currency names by order', () => {
        const result = currency();
        expect(result).toEqual([ 'دلار','IRR', 'USD', 'ریال']);
    });

     it('should return an array of currency names Contain', () => {
        const result = currency();
        expect(result).toContain('IRR');
        expect(result).toContain('USD');
        expect(result).toContain('ریال');
        expect(result).toContain('دلار');
    });
});