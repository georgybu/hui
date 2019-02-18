import React from 'react';
import WithStyle from './Subtitle.style';


const Subsitle = ({content}) => (
  (content)
    ? <WithStyle>{content}</WithStyle>
    : null
);

export default Subsitle;
