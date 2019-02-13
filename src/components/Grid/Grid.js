import React from 'react';
import WithStyle from './Grid.style';
import Column from './Column';


const Grid = (props) => {
  const {
    spacing,
    equal,
    rest,
    sm,
    md,
    lg,
    children
  } = props;

  const cloneData = Object.assign({},
    spacing && {spacing},
    equal && {equal},
    rest && {rest},
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

export default Grid;