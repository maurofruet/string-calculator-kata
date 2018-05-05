import split from './parser';

describe('String calculator', () => {

  it('splits zero numbers', () => {
    const result = split('');
    expect(result).toEqual([0]);
  });

  it('splits one number', () => {
    const result = split('5');
    expect(result).toEqual([5]);
  });

  it('splits one negative number', () => {
    const result = split('-10');
    expect(result).toEqual([-10]);
  });

  it('splits two numbers', () => {
    const result = split('1,3');
    expect(result).toEqual([1, 3]);
  });

  it('splits two negative numbers', () => {
    const result = split('-3,-7');
    expect(result).toEqual([-3, -7]);
  });

  it('adds n numbers', () => {
    const result = split('-3,-7,0,4,8,-10');
    expect(result).toEqual([-3, -7, 0, 4, 8, -10]);
  });
});
