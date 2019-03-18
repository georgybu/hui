import React from 'react';
import WithStyle from './TableHead.style';
import PropTypes from 'prop-types';


function TableHead(props) {
  const {
    visible,
    columns,
    rowKey
  } = props;

  if (!visible) {
    return null;
  }

  return (
    <WithStyle>
      <tr>
        {columns.map((column, index) => {
          let key = column.key;

          if (!key) {
            key = (typeof rowKey === 'function') ? rowKey() : `tablehead-${rowKey}-${index}`;
          }

          return (
            <th
              key={key}
              className={column.className}
            >
              {column.title}
            </th>
          )
        })}
      </tr>
    </WithStyle>
  )
}

TableHead.propTypes = {
  visible: PropTypes.bool,
  columns: PropTypes.array.isRequired
}

TableHead.defaultProps = {
  visible: true
}

export default TableHead;
