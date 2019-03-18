import React from 'react';
import PropTypes from 'prop-types';
import WithStyle from './Label.style';

const Label = ({children, forName, required}) => {
  return (
    <WithStyle htmlFor={forName} required={required}>{children}</WithStyle>
  )
}

Label.propTypes = {
  required: PropTypes.bool,
  forName: PropTypes.string
}

export default Label;
