import React from 'react'
import WithStyle from './ButtonGroup.style';


const ButtonGroup = ({children}) => {
  return (children)
    ? (
      <WithStyle>
        {children}
      </WithStyle>
    )
    : null;
}

export default ButtonGroup;
