import React, { Component } from 'react';

import Header from 'Header';
import Footer from 'Footer';
import Keyboard from 'Keyboard';
import Stickman from 'Stickman';
import Word from 'Word';
import { getWord, getHints } from './../api/wordnik';
import { includesAll } from './../utils/helpers';

// eslint-disable-next-line
const levels = {
  // beginner
  0: {
    minCorpusCount: 70,
    minDictionaryCount: 70,
    minLength: 6, // 5
  },
  1: {
    minCorpusCount: 40,
    minDictionaryCount: 40,
    minLength: 6,
  },
  2: {
    minCorpusCount: 30,
    minDictionaryCount: 30,
    minLength: 7,
  },
  3: {
    minCorpusCount: 20,
    minDictionaryCount: 20,
    minLength: 6,
  },
  // intermediate
  4: {
    minCorpusCount: 25,
    minDictionaryCount: 25,
    minLength: 9,
  },
  5: {
    minCorpusCount: 20,
    minDictionaryCount: 20,
    minLength: 8,
  },
  6: {
    minCorpusCount: 15,
    minDictionaryCount: 15,
    minLength: 12,
  },
  7: {
    minCorpusCount: 12,
    minDictionaryCount: 12,
    minLength: 8,
  },
  // Pro
  8: {
    minCorpusCount: 7,
    minDictionaryCount: 7,
    minLength: 7,
  },
  9: {
    minCorpusCount: 4,
    minDictionaryCount: 4,
    minLength: 8,
  },
  10: {
    minCorpusCount: 1,
    minDictionaryCount: 1,
    minLength: 7,
  },
};

class Game extends Component {
  constructor(props) {
    super(props);
    this.maxErrors = 10;
    this.state = {
      apiError: undefined,
      errors: 0,
      isPlaying: false,
      level: 0,
      rhymes: [],
      synonyms: [],
      usedLetters: [],
      word: '',
    };
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    this.start();
  }
  reset() {
    this.setState({
      apiError: undefined,
      errors: 0,
      isPlaying: false,
      level: 0,
      rhymes: [],
      synonyms: [],
      usedLetters: [],
      word: '',
    });
  }
  start() {
    this.reset();
    getWord(levels[this.state.level])
      .then((word) => {
        // eslint-disable-next-line
        console.log(word);
        return word;
      })
      .then((word) => {
        this.setState({
          apiError: undefined,
          isPlaying: true,
          word,
        });
        return word;
      })
      .then(word => getHints(word))
      .then(({ rhymes, synonyms }) => this.setState({ rhymes, synonyms }))
      .catch((err) => {
        this.setState({ apiError: err.message });
      });
  }
  handleClick(letter) {
    this.setState((prevState) => {
      if (prevState.usedLetters.includes(letter)) {
        return prevState;
      }
      const usedLetters = [
        ...prevState.usedLetters,
        letter,
      ];
      const errors = prevState.word.includes(letter) ?
        prevState.errors :
        prevState.errors + 1;

      if (errors === 10) {
        // eslint-disable-next-line
        console.log('Game over, you lose');
      }

      if (prevState.word.includes(letter) && includesAll(prevState.word, usedLetters)) {
        // eslint-disable-next-line
        console.log('Game over, you win');
      }

      return {
        usedLetters,
        errors,
      };
    });
  }
  render() {
    // eslint-disable-next-line
    const { errors, isPlaying, usedLetters, word } = this.state;
    return (
      <div>
        <Header title="Guess the Word" />
        <main>
          <Stickman
            errors={errors}
            isHanging={errors === 10}
          />
          <Word
            usedLetters={usedLetters}
            word={word}
          />
          <Keyboard
            usedLetters={usedLetters}
            onClickEvent={this.handleClick}
          />
          <button onClick={() => this.start()}>Restart</button>
        </main>
        <Footer />
      </div>
    );
  }
}

export default Game;
