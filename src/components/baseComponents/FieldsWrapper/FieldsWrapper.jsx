import React from 'react';
import PropTypes from 'prop-types';

import { Div } from './style';

const FieldsWrapper = ({ visible, children }) => {
  return <Div visible={visible !== undefined ? visible : true}>{children}</Div>;
};

FieldsWrapper.propTypes = {
  visible: PropTypes.bool,
  children: PropTypes.any,
};

export default FieldsWrapper;
