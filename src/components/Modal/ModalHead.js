import React from 'react'
import WithStyle from './ModalHead.style';
import Icon from '../Icon';


const ModalHead = ({children, handleCancel, titleId, showClosable}) => {

  const onClick = () => {
    if (handleCancel) {
      handleCancel();
    }
  }

  const close = (showClosable)
    ? (
      <button aria-label="סגור" onClick={onClick}>
        <Icon name="multiply" />
      </button>
      )
    : null;


  return (children)
    ? (
      <WithStyle>
        {close}
        <span id={titleId}>
          {children}
        </span>
      </WithStyle>
    )
    : null;
}

export default ModalHead;
