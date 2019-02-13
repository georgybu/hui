import React from 'react';
import WithStyle from './Column.style';
import PropTypes from 'prop-types';

const Column = (props) => (
  <WithStyle {...props} />
)

Column.prototypes = {
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  rest: PropTypes.number,
  size: PropTypes.number
}

export default Column;
