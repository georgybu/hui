import React from 'react'
import DivWithStyle from './Header.style';


function Header({title, info, children}) {
  return (
    <DivWithStyle>
      <h1>{title}</h1>
      <div className="info">{info}</div>
      <div className="content">{children}</div>
    </DivWithStyle>
  )
}

export default Header;
