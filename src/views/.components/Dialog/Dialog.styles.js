import { animated } from 'react-spring';
import styled from 'styled-components';

const Modal = styled(animated.div)`
  background: white;
  border-radius: 5px;
  box-shadow: 0px 10px 10px -5px rgba(0, 0, 0, 0.05);
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, minmax(100px, 1fr));
  padding: 25px;
  position: absolute;
  will-change: width, height;
  z-index: 100;
`;

export const Styles = { Modal };
