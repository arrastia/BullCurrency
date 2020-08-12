import React from 'react';

import { Styles } from './Header.styles';

import logo from 'assets/svg/logo.svg';

export const Header = () => (
  <Styles.Header>
    <img src={logo} alt="" />{' '}
  </Styles.Header>
);
