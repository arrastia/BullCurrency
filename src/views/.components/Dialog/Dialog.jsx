import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

import { config, useChain, useSpring, useTransition } from 'react-spring';

import { Styles } from './Dialog.styles';

import { useOnClickOutside } from 'views/.tools/Hooks/useOnClickOutside';

export const Dialog = ({ modalShapesFrom, modalShapesTo }) => {
  const [isOpened, setIsOpened] = useState(false);

  const modalRef = useRef(null);
  const springRef = useRef(null);
  const transitionRef = useRef(null);

  useChain(isOpened ? [springRef, transitionRef] : [transitionRef, springRef], [0, isOpened ? 0.1 : 0.1]);

  useOnClickOutside(modalRef, () => setIsOpened(false));

  const { size, opacity, ...rest } = useSpring({
    ref: springRef,
    config: config.stiff,
    from: { size: modalShapesFrom.size, background: modalShapesFrom.background },
    to: {
      size: isOpened ? modalShapesTo.openedSize : modalShapesTo.closedSize,
      background: isOpened ? modalShapesTo.openBackground : modalShapesTo.closedBackground
    }
  });

  return (
    <Styles.Modal style={{ ...rest, width: size, height: size }} ref={modalRef} onClick={() => setIsOpened(true)}></Styles.Modal>
  );
};

Dialog.propTypes = {
  modalShapesFrom: PropTypes.shape({
    background: PropTypes.string,
    size: PropTypes.string
  }),
  modalShapesTo: PropTypes.shape({
    closedBackground: PropTypes.string,
    closedSize: PropTypes.string,
    openBackground: PropTypes.string,
    openedSize: PropTypes.string
  })
};

Dialog.defaultProps = {
  modalShapesFrom: {
    background: '',
    size: ''
  },
  modalShapesTo: {
    closedBackground: '',
    closedSize: '',
    openBackground: '',
    openedSize: ''
  }
};
