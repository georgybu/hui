import React from 'react'
import WithStyle from './ModalFoot.style';


const ModalFoot = ({children}) => {
  return (children)
    ? (
      <WithStyle>
        {children}
      </WithStyle>
    )
    : null;
}

export default ModalFoot;
