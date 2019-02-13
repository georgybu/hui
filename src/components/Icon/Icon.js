import React from 'react';
import WithStyle from './Icon.style';


const Icon = (props) => {
  const {
    height,
    width,
    content
  } = props;
  
  return (
    <WithStyle {...props} viewBox={`0 0 ${width} ${height}`} dangerouslySetInnerHTML={{ __html: content}} />
  )
}

export default Icon;