import React from 'react';
import WithStyle from './Action.style';


const Action = ({content, href}) => (
  (href)
    ? <WithStyle href={href}>{content}</WithStyle>
    : null
);

export default Action;
