export function calculateSquare(value: any): number {
    if (typeof value !== 'number' || value === null) {
        return NaN;
    }
    return value * value;
}