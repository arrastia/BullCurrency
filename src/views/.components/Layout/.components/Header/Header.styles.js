import styled from 'styled-components';

import { spin } from 'views/.tools/Styles/KeyFrames';

const Header = styled('header')`
  align-items: center;
  display: flex;
  height: 25vmin;
  justify-content: center;
  left: 0;
  margin: 1vmin;
  position: absolute;
  top: 0;
  width: calc(100vw - 2vmin);

  img {
    animation: ${spin} infinite 5s linear;
    width: 25vmin;
  }
`;

export const Styles = { Header };
