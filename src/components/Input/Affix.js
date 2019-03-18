import React from 'react';
import WithStyle from './Affix.style';


const Affix = (props) => (
  <WithStyle {...props}>
    {props.children}
  </WithStyle>
)

export default Affix;
