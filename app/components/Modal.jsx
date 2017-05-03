import React from 'react';
import PropTypes from 'prop-types';

const Modal = ({ isOpen, title, children, onClose }) => {
  const classNames = isOpen ? 'modal modal--is-open' : 'modal';
  return (
    <div
      className={classNames}
      role="dialog"
      aria-labelledby="dialog-title"
      {...(!isOpen && { 'aria-hidden': true })}
      tabIndex="-1"
    >
      <div className="modal__wrapper">
        <h3
          className="modal__title"
          id="dialog-title"
        >{title}</h3>
        {children}
        <button
          className="modal__btn modal__btn--close"
          aria-label="Close"
          onClick={onClose}
        ><span aria-hidden="true">&times;</span></button>
      </div>
    </div>
  );
};

Modal.defaultProps = {
  isOpen: false,
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default Modal;
