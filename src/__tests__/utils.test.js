const { isPalindrome } = require('../utils');

describe('isPalindrome function', () => {
  test('returns true for a palindrome word', () => {
    expect(isPalindrome('racecar')).toBe(true);
  });

  test('returns false for a non-palindrome word', () => {
    expect(isPalindrome('car')).toBe(false);
  });

  test('returns true for a palindrome with uppercase and lowercase letters', () => {
    expect(isPalindrome('Racecar')).toBe(true);
  });

  test('returns false for an empty string', () => {
    expect(isPalindrome('')).toBe(false);
  });
});
