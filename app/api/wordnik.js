import axios from 'axios';

const wordnikUrl = 'http://api.wordnik.com:80/v4/';
const apiKey = 'a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5';

const toParams = obj => Object.keys(obj)
  .map(key => `${key}=${encodeURIComponent(obj[key])}`)
  .join('&');

function handleError(error) {
  if (error.response) {
    if (error.response.status === 401) {
      throw new Error('Authorization failed, check your API key');
    } else if (error.response.status === 404) {
      throw new Error('No results found, try adjust your parameters');
    }
    throw new Error(error.response.data.message);
  }
  throw new Error(error);
}

export function getWord(settings = {}) {
  const endpoint = 'words.json/randomWord';
  const defaultSettings = {
    hasDictionaryDef: true,
    minCorpusCount: 10,
    maxCorpusCount: -1,
    minDictionaryCount: 10,
    maxDictionaryCount: -1,
    minLength: 4,
    maxLength: 16,
    api_key: apiKey,
  };
  const params = toParams(Object.assign({}, defaultSettings, settings));
  const url = `${wordnikUrl}${endpoint}?${params}`;

  return axios.get(url)
    .then((res) => {
      // eslint-disable-next-line
      console.log(res);
      return res;
    })
    .then(res => res.data.word)
    .then(word => word.toLowerCase())
    // replace non alphabetic characters
    .catch(error => handleError(error));
}

export function getHints(word) {
  const endpoint = `word.json/${word}/relatedWords`;
  const settings = {
    useCanonical: false,
    limitPerRelationshipType: 10,
    api_key: apiKey,
  };
  const params = toParams(settings);
  const url = `${wordnikUrl}${endpoint}?${params}`;

  return axios.get(url)
    .then(res => res.data.reduce((hints, hint) => {
      if (hint.relationshipType === 'rhyme' || hint.relationshipType === 'synonym') {
        // eslint-disable-next-line no-param-reassign
        hints[`${hint.relationshipType}s`] = hint.words;
      }
      return hints;
    }, {}))
    .catch(error => handleError(error));
}

export function getSynonyms(word) {
  const endpoint = `word.json/${word}/relatedWords`;
  const settings = {
    useCanonical: false,
    limitPerRelationshipType: 10,
    relationshipTypes: 'synonym',
    api_key: apiKey,
  };
  const params = toParams(settings);
  const url = `${wordnikUrl}${endpoint}?${params}`;

  return axios.get(url)
    .then((res) => {
      if (res.data[0] && res.data[0].relationshipType === 'synonym') {
        return res.data[0].words;
      }
      return [];
    })
    .catch(error => handleError(error));
}

export function getRhymes(word) {
  const endpoint = `word.json/${word}/relatedWords`;
  const settings = {
    useCanonical: false,
    limitPerRelationshipType: 10,
    relationshipTypes: 'rhyme',
    api_key: apiKey,
  };
  const params = toParams(settings);
  const url = `${wordnikUrl}${endpoint}?${params}`;

  return axios.get(url)
    .then((res) => {
      if (res.data[0] && res.data[0].relationshipType === 'rhyme') {
        return res.data[0].words;
      }
      return [];
    })
    .catch(error => handleError(error));
}
