import React from 'react';
import WithStyle from './Grid.style';
import Column from './Column';
import PropTypes from 'prop-types';


const Grid = (props) => {
  const {
    spacing,
    equalHeight,
    col,
    sm,
    md,
    lg,
    children
  } = props;

  const cloneData = Object.assign({},
    spacing && {spacing},
    equalHeight && {equalHeight},
    col && {col},
    sm && {sm},
    md && {md},
    lg && {lg}
  )

  const childrenWithProps = React.Children.map(children, child =>
    React.cloneElement(child, cloneData)
  )

  return (
  <WithStyle {...props}>{childrenWithProps}</WithStyle>
  )
}

Grid.Column = Column;

Grid.propTypes = {
  /**
   * definition of spacing between columns
   */
  spacing: PropTypes.oneOf(['medium', 'large', 'empty']),

  /**
   * whether to make the grid columns equal in height
   */
  equalHeight: PropTypes.bool,

  /**
   * number of cells (12 total in row) column in the grid row occupy
   */
  col: PropTypes.number,

  /**
   * ≥518px, number of cells each column in the grid row occupy
   */
  sm: PropTypes.number,

  /**
   * ≥765px, number of cells each column in the grid row occupy
   */
  md: PropTypes.number,

  /**
   * ≥1013px, number of cells each column in the grid row occupy
   */
  lg: PropTypes.number
}

Grid.defaultProps = {
  spacing: 'medium'
}

export default Grid;
