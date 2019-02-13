import React from 'react';
import WithStyle from './Head.style';


const Head = ({header, children}) => (
  (header) 
    ? <WithStyle>{children}</WithStyle>
    : null
)

export default Head;