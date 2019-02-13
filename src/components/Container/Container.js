import React from 'react';
import PropTypes from 'prop-types';


const Container = ({children, global}) => {
  const classes = `u-wrap ${(global ? 'u-mt-s' : null)}`;

  return (
    <div className={classes}>{children}</div>
  )
}

Container.propTypes = {
  global: PropTypes.bool
}

Container.defaultProps = {
  global: false
}

export default Container;