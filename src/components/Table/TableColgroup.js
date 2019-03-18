import React from 'react';

function TableColgroup({columns}) {
  return (
    <colgroup>
      {columns.map((column, index) => {
        return (
          <col key={`col-${index}`} width={column.width} />
        )
      })}
    </colgroup>
  )
}

export default TableColgroup;
