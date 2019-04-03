import React from 'react';
import WithStyle from './Loader.style';
import PropTypes from 'prop-types';


const Loader = (props) => {
  const {
    active,
    children,
    className,
    content,
    inline,
    inverted,
    size
  } = props;

  const variables = {
    className,
    inline,
    inverted,
    size,
    children: children || content || null
  };

  return (
    (active)
    ? <WithStyle {...variables} />
    : null
  )
}

Loader.propTypes = {
  active: PropTypes.bool,
  inline: PropTypes.bool,
  inverted: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'large', 'medium', 'xlarge', 'xxlarge'])
}

Loader.defaultProps = {
  size: 'medium',
  active: true,
  inline: false,
  inverted: false
}

export default Loader;
