import React, { PropTypes } from 'react';

const Word = ({ word, usedLetters }) => {
  const letters = word.split('')
    .map((letter, i) => {
      const classNames = usedLetters.includes(letter) ?
        'word__letter word__letter--revealed' :
        'word__letter';
      return (
        // eslint-disable-next-line react/no-array-index-key
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
