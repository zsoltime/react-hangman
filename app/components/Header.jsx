import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ title }) => (
  <header className="site-header">
    <h1 className="site-header__title">{ title }</h1>
  </header>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
