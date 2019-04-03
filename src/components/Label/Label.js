import React from 'react';
import PropTypes from 'prop-types';
import WithStyle from './Label.style';

const Label = ({children, forName, required}) => {
  return (
    <WithStyle htmlFor={forName} required={required}>{children}</WithStyle>
  )
}

Label.propTypes = {
  /**
   * whether input is required. will show asterix
   */
  required: PropTypes.bool,

  /**
   * will connect label to the form input by id
   */
  forName: PropTypes.string
}

export default Label;
