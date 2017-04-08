import React, { Component } from 'react';

import Header from 'Header';
import Footer from 'Footer';
// import Splash from 'Splash';
import Stickman from 'Stickman';
import Keyboard from 'Keyboard';
import Word from 'Word';
import { getWord } from './../api/wordnik';

class Game extends Component {
  constructor(props) {
    super(props);
    this.maxErrors = 10;
    this.state = {
      isPlaying: false,
      word: 'banana',
      usedLetters: [],
      hints: [],
      errors: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    getWord()
    .then((word) => {
      // eslint-disable-next-line
      console.log(word);
      return word;
    })
    .then((word) => { this.setState({ word }); });
  }
  handleClick(letter) {
    this.setState((prevState) => {
      if (prevState.usedLetters.includes(letter)) { return prevState; }
      if (prevState.word.includes(letter)) {
        //
      }
      // check if game over
      // either no more chances
      // or every letters in the word is revealed
      return {
        usedLetters: [
          ...prevState.usedLetters,
          letter,
        ],
        errors: prevState.word.includes(letter) ? prevState.errors : prevState.errors + 1,
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
        </main>
        <Footer />
      </div>
    );
  }
}

export default Game;
