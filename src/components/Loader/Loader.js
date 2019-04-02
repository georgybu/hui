import React from 'react';
import WithStyle from './Loader.style';


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

Loader.defaultProps = {
  size: 'medium'
}

export default Loader;
