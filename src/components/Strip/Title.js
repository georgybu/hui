import React from 'react';
import WithStyle from './Title.style';


const Title = ({title, isSpecial}) => (
  (!isSpecial)
    ? <WithStyle>{title}</WithStyle> 
    : null
)


export default Title;