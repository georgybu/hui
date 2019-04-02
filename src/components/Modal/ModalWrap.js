import React, { Component, createRef } from 'react'
import DivWithStyle from './ModalWrap.style';

class ModalWrap extends Component {
  constructor(props) {
    super(props);
  }

  wrapOnClick = (e) => {
    const {
      onClick,
      wrapClosable
    } = this.props;

    if (wrapClosable && e.target === e.currentTarget) {
      onClick();
    }
  }

  render() {
    const {
      children,
      titleId,
      contentId,
      id,
      onKeyDown
    } = this.props;

    return (
      <DivWithStyle
        id={id}
        role="dialog"
        tabIndex="-1"
        aria-labelledby={titleId}
        aria-describedby={contentId}
        onKeyDown={onKeyDown}
        onClick={this.wrapOnClick}
      >
        {children}
      </DivWithStyle>
    )
  }
}

export default ModalWrap;
