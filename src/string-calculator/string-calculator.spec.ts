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

  it('adds numbers with support to different delimiters', () => {
    const result = add('//\t\n1\t3');
    expect(result).toBe(4);
  });

  it('ignores numbers greater than 1000', () => {
    const result = add('//\t\n1500\t3');
    expect(result).toBe(3);
  });
});
