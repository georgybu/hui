import React from 'react'
import DivWithStyle from './ModalContent.style';


const ModalContent = ({children, width}) => {
  return (
    <DivWithStyle width={width}>
      {children}
    </DivWithStyle>
  )
}

export default ModalContent;
