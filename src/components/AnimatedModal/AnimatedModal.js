/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import classNames from 'classnames';
import React, { useState } from 'react';
import Modal from 'react-modal';

import './AnimatedModal.css';

const customStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.65)',
  },
};

function AnimatedModal({
  isOpen,
  onRequestClose,
  children,
}) {
  const [isAnimated, setIsAnimated] = useState(true);
  return (
    <Modal
      className={classNames(
        'AnimatedPopupContent',
      )}
      overlayClassName={classNames(
        'AnimatedPopupOverlay',
        {
          AnimateIn: isAnimated,
        }
      )}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      htmlOpenClassName="off-hiden"
      style={customStyles}
      ariaHideApp={false}
      onAfterOpen={() => {
        setTimeout(() => setIsAnimated(true), 30);
      }}
      onAfterClose={() => {
        setIsAnimated(false);
      }}
    >
      {children}
    </Modal>
  );
}

export default AnimatedModal;
