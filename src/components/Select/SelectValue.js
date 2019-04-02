import React from 'react'
import DivWithStyle from './SelectValue.style';


function SelectValue({title}) {
  return (title)
    ? <DivWithStyle unselectable="on">{title}</DivWithStyle>
    : null
}

export default SelectValue;
