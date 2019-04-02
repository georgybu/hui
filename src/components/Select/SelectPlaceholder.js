import React from 'react'
import DivWithStyle from './SelectPlaceholder.style';


function SelectPlaceholder({title, visible}) {
  return (title)
    ? <DivWithStyle visible={visible} unselectable="on">{title}</DivWithStyle>
    : null
}

export default SelectPlaceholder;
