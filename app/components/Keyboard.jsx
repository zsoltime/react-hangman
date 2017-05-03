import React from 'react';
import PropTypes from 'prop-types';

const Keyboard = ({ onClickEvent, usedLetters }) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const buttons = alphabet.map(btn => (
    <button
      key={btn}
      className="keyboard__btn"
      disabled={usedLetters.includes(btn)}
      onClick={() => onClickEvent(btn)}
    >{btn}</button>
  ));

  return (
    <div className="keyboard">
      {buttons}
    </div>
  );
};

Keyboard.propTypes = {
  onClickEvent: PropTypes.func.isRequired,
  usedLetters: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Keyboard;
