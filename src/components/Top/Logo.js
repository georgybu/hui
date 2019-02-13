import React from 'react';
import WithStyle from './Logo.style';


const Logo = props => (
  (props.showLogo)
    ? <WithStyle {...props}></WithStyle>
    : null
)

export default Logo;