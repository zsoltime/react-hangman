// eslint-disable-next-line import/prefer-default-export
export const includesAll = (word, letters) => {
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < word.length; i++) {
    if (!letters.includes(word[i])) {
      return false;
    }
  }
  return true;
};
