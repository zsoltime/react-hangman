// eslint-disable-next-line import/prefer-default-export
export const includesAll = (word, letters) => {
  if (typeof word !== 'string') {
    throw new TypeError('First argument expected to be a string');
  }
  if (!Array.isArray(letters)) {
    throw new TypeError('Second argument expected to be an array');
  }
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < word.length; i++) {
    if (!letters.includes(word[i])) {
      return false;
    }
  }
  return true;
};
