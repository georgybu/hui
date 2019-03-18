import React from 'react';
import WithStyle from './TableWrap.style';

function TableWrap({children}) {
  return (
    <WithStyle>
      {children}
    </WithStyle>
  )
}

export default TableWrap;
