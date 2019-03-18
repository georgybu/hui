import React from 'react'
import WithStyle from './Caption.style';


const Caption = ({children}) => {
  return (children)
    ? <WithStyle>{children}</WithStyle>
    : null;
}

export default Caption;
