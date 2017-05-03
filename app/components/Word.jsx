import React from 'react';
import PropTypes from 'prop-types';

const Word = ({ usedLetters, word }) => {
  if (!word) {
    return (
      <div className="word">
        <div className="word__placeholder">
          <div className="'word__letter word__letter--revealed'">?</div>
        </div>
      </div>
    );
  }
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
