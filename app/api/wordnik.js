import axios from 'axios';

const wordnikUrl = 'https://api.wordnik.com/v4/words.json/randomWord?api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5';
// const options = {
//   hasDictionaryDef: true,
//   minCorpusCount: 10,
//   maxCorpusCount: -1,
//   minDictionaryCount: 10,
//   maxDictionaryCount: -1,
//   minLength: 4,
//   maxLength: 16,
//   api_key: 'a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5',
// };

export function getWord() {
  return axios.get(wordnikUrl)
    .then((res) => {
      // eslint-disable-next-line
      console.log(res);
      return res;
    })
    .then(res => res.data.word)
    .then(word => word.toLowerCase())
    // replace non alphabetic characters
    .catch((err) => { throw new Error(err); });
}

export function getSynonyms() {
  return axios.get(wordnikUrl)
  .then(res => res)
  .catch((err) => {
    throw new Error(err);
  });
}
