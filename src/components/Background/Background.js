import React from 'react';
import DivWithStyle from './Background.style';
import PropTypes from 'prop-types';

const Background = ({active}) => {

  const visible = ((typeof active == 'undefined') || active == true);

  return (
    (visible)
    ? <DivWithStyle />
    : null
  )
}

Background.propTypes = {
  /**
   * whether or not show the background image itself
   */
  active: PropTypes.bool
}

Background.defaultProps = {
  active: true
}

export default Background;
