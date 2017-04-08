import React, { PropTypes } from 'react';

const Word = ({ word, usedLetters }) => {
  const letters = word.split('')
    .map((letter, i) => {
      // eslint-disable-next-line
      console.log(letter, usedLetters.includes(letter));
      const classNames = `word__letter${
          usedLetters.includes(letter) ? ' word__letter--revealed' : ''
        }`;
      return (
        // eslint-disable-next-line
        <div key={i} className="word__placeholder">
          <div className={classNames}>
            {letter}
          </div>
        </div>
      );
    });
  return (
    <div className="word">
      {letters}
    </div>
  );
};

Word.propTypes = {
  usedLetters: PropTypes.arrayOf(PropTypes.string).isRequired,
  word: PropTypes.string.isRequired,
};

export default Word;
