import React from 'react';
import PropTypes from 'prop-types';
import WithStyle from './TableRow.style';


function TableRow(props) {
  const {
    row,
    columns
  } = props;

  return (
    <WithStyle>
        {columns.map((column) => {
            const content = (column.render)
              ? column.render(row[column.dataIndex])
              : row[column.dataIndex];

            return (
              <td
                key={column.key}
                className={column.className}
              >
                {content}
              </td>
            )
          })
        }

    </WithStyle>
  )
}



export default TableRow
