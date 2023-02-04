import React from 'react';
import PropTypes from 'prop-types';

import { SpinnerStyled } from './style';

const ButtonSpinner = props => {
  const { icon, size, children, ...rest } = props;
  return (
    <SpinnerStyled
      icon={icon || 'fa-solid fa-spinner'}
      size={size || '1.5rem'}
      {...rest}
    >
      {children}
    </SpinnerStyled>
  );
};

ButtonSpinner.propTypes = {
  type: PropTypes.string,
  buttonStyle: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.any,
};

export default ButtonSpinner;
