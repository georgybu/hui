import React from 'react';
import WithStyle from './Title.style';


const Title = ({content}) => (
  (content)
    ? <WithStyle>{content}</WithStyle>
    : null
);

export default Title;
