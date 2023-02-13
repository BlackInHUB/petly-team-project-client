import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  FieldStyled,
  Label,
  FieldWrapper,
  EyeIconOn,
  EyeIconOff,
  DecorativeDiv,
} from './style';

const Input = ({
  name,
  id,
  type,
  autoComplete = 'none',
  required,
  password = false,
  text,
  children,
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [passwordReadOnly, setPasswordReadOnly] = useState(true);

  return (
    <FieldWrapper>
      <FieldStyled
        id={id || name}
        name={name}
        type={password ? (showPassword ? 'text' : 'password') : type || 'text'}
        autoComplete={password ? 'new-password' : autoComplete}
        required={required || true}
        readOnly={password ? passwordReadOnly : false}
        onFocus={() => setPasswordReadOnly(false)}
        {...rest}
      />
      <Label htmlFor={name}>{text}</Label>
      <DecorativeDiv>{text}</DecorativeDiv>
      {password && showPassword && (
        <EyeIconOn onClick={() => setShowPassword(!showPassword)} />
      )}
      {password && !showPassword && (
        <EyeIconOff onClick={() => setShowPassword(!showPassword)} />
      )}

      {children}
    </FieldWrapper>
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  type: PropTypes.string,
  autoComplete: PropTypes.string,
  required: PropTypes.bool,
  password: PropTypes.bool,
  text: PropTypes.string.isRequired,
  children: PropTypes.any,
};

export default Input;
