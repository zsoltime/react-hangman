import expect from 'expect';

import { includesAll } from '../../utils/helpers';

describe('helpers', () => {
  describe('includesAll', () => {
    it('should throw a TypeError when word is not a string', () => {
      const invalidWord = 123;
      const letters = ['a', 'b', 'c'];

      expect(() => includesAll(invalidWord, letters)).toThrow(TypeError);
    });

    it('should throw a TypeError when letters is not an array', () => {
      const word = 'banana';
      const invalidLetters = 'abc';

      expect(() => includesAll(word, invalidLetters)).toThrow(TypeError);
    });

    it('should return false if not every letter is included in word', () => {
      const word = 'banana';
      const letters = ['a', 'b', 'c', 'd'];

      expect(includesAll(word, letters)).toBe(false);
    });

    it('should return true if every letter is included in word', () => {
      const word = 'banana';
      const letters = ['a', 'b', 'n'];

      expect(includesAll(word, letters)).toBe(true);
    });

    it('should return true if every letter is included and there are other letters', () => {
      const word = 'banana';
      const letters = ['a', 'b', 'c', 'd', 'n'];

      expect(includesAll(word, letters)).toBe(true);
    });
  });
});
