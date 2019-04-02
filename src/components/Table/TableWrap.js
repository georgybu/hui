import React from 'react';
import WithStyle from './TableWrap.style';

function TableWrap({children, direction}) {
  return (
    <WithStyle direction={direction}>
      {children}
    </WithStyle>
  )
}

export default TableWrap;
