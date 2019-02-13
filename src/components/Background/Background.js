import React from 'react';
import WithStyle from './Background.style';


const Background = ({active}) => {

  const visible = ((typeof active == 'undefined') || active == true) ? true : false;

  return (
    (visible)
    ? <WithStyle />
    : null
  )
}

export default Background;
