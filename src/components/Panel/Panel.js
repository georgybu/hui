import React from 'react';
import WithStyle from './Panel.style';
import PropTypes from 'prop-types';

const Panel = (props) => {
  const {
    children
  } = props;

  return (
    <WithStyle {...props}>
      {children}
    </WithStyle>
  )
}

Panel.propTypes = {
  spacing: PropTypes.oneOf(['empty', 'normal', 'large']),
  type: PropTypes.oneOf(['light', 'dark', 'primary', 'secondary', 'normal']),
}

Panel.defaultProps = {
  spcaing: 'normal',
  type: 'normal'
}

export default Panel;
