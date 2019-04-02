import React from 'react'
import WithStyle from './ModalBody.style';


const ModalBody = ({children, contentId}) => {
  return (
    <WithStyle id={contentId}>
      {children}
    </WithStyle>
  )
}

export default ModalBody;
