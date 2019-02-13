import React from 'react';
import { isChildrenNil } from '../../utils';


const Body = ({children, content, close}) => {
  const hasChildren = !isChildrenNil(children);

  return (
    (!close)
    ? <div>{(hasChildren) ? children : content}</div>
    : null
  )
}

export default Body;