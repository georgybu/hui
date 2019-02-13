import React from 'react';
import WithStyle from './Textarea.style';
import { isChildrenNil } from '../../utils';


const Textarea = (props) => {
  const {
    children,
    value
  } = props;

  const hasChildren = !isChildrenNil(children);

  // handleKeyDown = (e) => {
  //   const {onPressEnter, onKeyDown} = props;

  //   if (e.keyCode === 13 && onPressEnter) {
  //     onPressEnter(e);
  //   }

  //   if (onKeyDown) {
  //     onKeyDown(e);
  //   }
  // }

  // handleTextareaChange = (e) => {
  //   if (!('value' in props)) {
  //     this.resizeTextarea();
  //   }

  //   const { onChange } = props;
  //   if (onChange) {
  //     onChange(e);
  //   }
  // }


      // onKeyDown={this.handleKeyDown}
      // onChange={this.handleTextareaChange}


  return (
    <WithStyle>
      {(hasChildren) ? children : value}
    </WithStyle>
  )
}

export default Textarea;
