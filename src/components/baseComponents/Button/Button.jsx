import React from 'react';
import PropTypes from 'prop-types';

import { StyledButton } from './style';

const Button = props => {
  const { type, buttonStyle, disabled, children, ...rest } = props;

  return (
    <StyledButton
      type={type || 'button'}
      buttonStyle={buttonStyle || 'primary'}
      disabled={disabled}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  buttonStyle: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.any,
};

export default Button;
