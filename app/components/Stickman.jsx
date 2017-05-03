import React from 'react';
import PropTypes from 'prop-types';

const Stickman = ({ color, errors, isHanging, strokeWidth }) => (
  <svg
    className="gallows"
    width="0"
    height="0"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="140 45 370 365"
  >
    <g>
      <line
        className={errors >= 0 ? 'dash dash--drawn' : 'dash'}
        x1="145"
        y1="405"
        x2="505"
        y2="405"
        stroke={color}
        strokeWidth={strokeWidth}
        fill="none"
      />
      <line
        className={errors >= 1 ? 'dash dash--drawn' : 'dash'}
        x1="210"
        y1="405"
        x2="210"
        y2="50"
        stroke={color}
        strokeWidth={strokeWidth}
        fill="none"
      />
      <line
        className={errors >= 2 ? 'dash dash--drawn' : 'dash'}
        x1="210"
        y1="50"
        x2="350"
        y2="50"
        stroke={color}
        strokeWidth={strokeWidth}
        fill="none"
      />
      <line
        className={errors >= 3 ? 'dash dash--drawn' : 'dash'}
        x1="210"
        y1="95"
        x2="255"
        y2="50"
        stroke={color}
        strokeWidth={strokeWidth}
        fill="none"
      />
    </g>
    <g className={isHanging ? 'stickman stickman--hanging' : 'stickman'}>
      <line
        className={errors >= 4 ? 'dash dash--drawn' : 'dash'}
        x1="350"
        y1="50"
        x2="350"
        y2="80"
        stroke={color}
        strokeWidth={strokeWidth}
        fill="none"
      />
      <ellipse
        className={errors >= 5 ? 'dash dash--drawn' : 'dash'}
        rx="24"
        ry="30"
        cx="350"
        cy="110"
        stroke={color}
        strokeWidth={strokeWidth}
        fill="none"
      />
      <line
        className={errors >= 6 ? 'dash dash--drawn' : 'dash'}
        x1="350"
        y1="140"
        x2="350"
        y2="240"
        stroke={color}
        strokeWidth={strokeWidth}
        fill="none"
      />
      <line
        className={errors >= 7 ? 'dash dash--drawn' : 'dash'}
        x1="350"
        y1="160"
        x2="305"
        y2="205"
        stroke={color}
        strokeWidth={strokeWidth}
        fill="none"
      />
      <line
        className={errors >= 8 ? 'dash dash--drawn' : 'dash'}
        x1="350"
        y1="160"
        x2="305"
        y2="205"
        stroke={color}
        strokeWidth={strokeWidth}
        transform="rotate(-90 350,160)"
        fill="none"
      />
      <line
        className={errors >= 9 ? 'dash dash--drawn' : 'dash'}
        x1="350"
        y1="240"
        x2="305"
        y2="285"
        stroke={color}
        strokeWidth={strokeWidth}
        fill="none"
      />
      <line
        className={errors >= 10 ? 'dash dash--drawn' : 'dash'}
        x1="350"
        y1="240"
        x2="305"
        y2="285"
        stroke={color}
        strokeWidth={strokeWidth}
        transform="rotate(-90 350,240)"
        fill="none"
      />
    </g>
  </svg>
);

Stickman.defaultProps = {
  color: '#444',
  strokeWidth: 8,
};

Stickman.propTypes = {
  color: PropTypes.string,
  errors: PropTypes.number.isRequired,
  isHanging: PropTypes.bool.isRequired,
  strokeWidth: PropTypes.number,
};

export default Stickman;
