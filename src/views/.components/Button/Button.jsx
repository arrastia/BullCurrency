import React, { forwardRef, Fragment } from 'react';
import PropTypes from 'prop-types';

import { Styles } from './Button.styles';

export const Button = forwardRef(({ className, disabled, icon, label, onClick, onDoubleClick, style }, ref) => {
  const renderIcon = () => (icon ? <Styles.Icon>{icon}</Styles.Icon> : <Fragment />);
  const renderLabel = () => (label ? <Styles.Text>{label}</Styles.Text> : <Fragment />);

  return (
    <Styles.Button className={className} disabled={disabled} onClick={onClick} onDoubleClick={onDoubleClick} ref={ref} style={style}>
      {renderIcon()}
      {renderLabel()}
    </Styles.Button>
  );
});

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  className: PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  onClick: PropTypes.func,
  onDoubleClick: PropTypes.func,
  ref: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({ current: PropTypes.any })]),
  style: PropTypes.object
};

Button.defaultProps = {
  className: 'primary',
  disabled: false,
  label: '',
  onClick: () => {},
  onDoubleClick: () => {},
  ref: null,
  style: {}
};
