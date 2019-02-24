import React from 'react';
import WithStyle from './Total.style';
import PropTypes from 'prop-types';


const Total = ({children}) => {
  return (
    <WithStyle>{children}</WithStyle>
  )
};

export default Total;
