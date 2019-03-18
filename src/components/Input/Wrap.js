import React from 'react';
import WithStyle from './Wrap.style';


const Wrap = (props) => (
  <WithStyle {...props}>
    {props.children}
  </WithStyle>
)

export default Wrap;
