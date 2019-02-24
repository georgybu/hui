import React from 'react';
import WithStyle from './Background.style';


const Background = ({active}) => {

  const visible = ((typeof active == 'undefined') || active == true);

  return (
    (visible)
    ? <WithStyle />
    : null
  )
}

export default Background;
