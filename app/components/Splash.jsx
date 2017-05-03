import React from 'react';
import PropTypes from 'prop-types';

import Header from 'Header';

const Splash = ({ chooseLevel, openInfoModal, startGame }) => (
  <div className="splash">
    <Header title="Hangman" />
    <div className="btn-group">
      <button className="btn" onClick={startGame}>Start Game</button>
      <button className="btn" onClick={chooseLevel}>Choose Level</button>
      <button className="btn" onClick={openInfoModal}>Info</button>
    </div>
  </div>
);

Splash.propTypes = {
  chooseLevel: PropTypes.func.isRequired,
  openInfoModal: PropTypes.func.isRequired,
  startGame: PropTypes.func.isRequired,
};

export default Splash;
