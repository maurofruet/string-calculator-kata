import { add } from './string-calculator';

describe('String calculator', () => {
  it('adds zero numbers', () => {
    const result = add('');
    expect(result).toBe(0);
  });
});
