import React from 'react';
import WithStyle from './Subtitle.style';


const Subtitle = ({subtitle}) => (
  (subtitle)
    ? <WithStyle>{subtitle}</WithStyle>
    : null
)

export default Subtitle;