import React from 'react';
import PropTypes from 'prop-types';

import { PaddingWrapperStyled } from './style';

const PaddingWrapper = ({ children }) => {
  return <PaddingWrapperStyled>{children}</PaddingWrapperStyled>;
};

PaddingWrapper.propTypes = {
  children: PropTypes.any,
};

export default PaddingWrapper;
