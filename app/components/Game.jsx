import React, { Component } from 'react';

import Header from 'Header';
import Footer from 'Footer';
import Keyboard from 'Keyboard';
import Stickman from 'Stickman';
import Word from 'Word';
import { getWord } from './../api/wordnik';
import { includesAll } from './../utils/helpers';

class Game extends Component {
  constructor(props) {
    super(props);
    this.maxErrors = 10;
    this.state = {
      errors: 0,
      hints: [],
      isPlaying: false,
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
      errors: 0,
      hints: [],
      isPlaying: false,
      usedLetters: [],
      word: '',
    });
  }
  start() {
    this.reset();
    getWord()
    .then((word) => {
      // eslint-disable-next-line
      console.log(word);
      return word;
    })
    .then((word) => {
      this.setState({
        isPlaying: true,
        word,
      });
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
