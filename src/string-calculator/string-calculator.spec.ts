import add from './string-calculator';

describe('String calculator', () => {
  it('adds zero numbers', () => {
    const result = add('');
    expect(result).toBe(0);
  });

  it('adds one number', () => {
    const result = add('4');
    expect(result).toBe(4);
  });

  it('adds two numbers', () => {
    const result = add('1,3');
    expect(result).toBe(4);
  });

  it('adds n numbers', () => {
    const result = add('3,7,0,4,8,10');
    expect(result).toBe(32);
  });

  it('adds n numbers with new line and comma delimiters', () => {
    const result = add('3\n7,4');
    expect(result).toBe(14);
  });

  it('add numbers with support to different delimiters', () => {
    const result = add('//\t\n1\t3');
    expect(result).toBe(4);
  });

  it('throws an exception with a negative number', () => {
    expect(() => {add('//\t\n-3\t1'); }).toThrow(new Error('negatives not allowed: -3'));
  });

  it('throws an exception with negative numbers', () => {
    expect(() => {add('//\t\n-3\t-11'); }).toThrow(new Error('negatives not allowed: -3,-11'));
  });
});
