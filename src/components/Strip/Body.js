import React from 'react';
import { isChildrenNil } from '../../utils';
import DivWithStyle from './Body.style';


const Body = ({children, content, close}) => {
  const text = !isChildrenNil(children) ? children : content;

  return (
    <DivWithStyle close={close}>{text}</DivWithStyle>
  )
}

export default Body;
