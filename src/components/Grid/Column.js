import React from 'react';
import WithStyle from './Column.style';
import PropTypes from 'prop-types';

const Column = (props) => (
  <WithStyle {...props} />
)

Column.propTypes = {
  /**
   * number of cells (12 total in row) specific column occupy
   */
  col: PropTypes.number,

  /**
   * ≥518px, number of cells the specific column occupy
   */
  sm: PropTypes.number,

  /**
   * ≥765px, number of cells the specific column occupy
   */
  md: PropTypes.number,

  /**
   * ≥1013px, number of cells the specific column occupy
   */
  lg: PropTypes.number
}

export default Column;
