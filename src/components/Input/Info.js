import React from 'react';
import WithStyle from './Info.style';


const Info = (props) => (
  <WithStyle {...props}>
    {props.children}
  </WithStyle>
)

export default Info;
