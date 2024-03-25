function isPalindrome(word) {
    if (typeof word !== 'string') {
      throw new Error('Input must be a string');
    }
  
    const cleanWord = word.toLowerCase().replace(/[^a-zA-Z]/g, '');
  
    if (!cleanWord) {
      return false;
    }
  
    if (!/^[a-zA-Z]+$/.test(cleanWord)) {
      throw new Error('Input must contain only alphabetic characters');
    }
  
    return cleanWord === cleanWord.split('').reverse().join('');
  }

  export { isPalindrome }