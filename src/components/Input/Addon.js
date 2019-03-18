import React from 'react';
import WithStyle from './Addon.style';


const Addon = (props) => (
  <WithStyle {...props}>
    {props.children}
  </WithStyle>
)

export default Addon;
