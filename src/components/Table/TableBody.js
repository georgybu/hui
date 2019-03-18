import React from 'react'
import PropTypes from 'prop-types';
import TableRow from './TableRow';


function paginate (array, pageSize, pageNumber) {
  --pageNumber; // because pages logically start with 1, but technically with 0
  let start = pageNumber * pageSize;
  let end = (pageNumber + 1) * pageSize;

  if (start >= array.length) {
    end = array.length;
    start = (end - pageSize < 0) ? 0 : end - pageSize;
  }

  return array.slice(start, end);
}


function TableBody(props) {
  const {
    rows,
    columns,
    page,
    perPage,
    showPages,
    rowKey
  } = props;

  const renderEmpty = () => {
    const colspan = (columns.length > 1) ? columns.length : null;

    return (
      <tr>
        <td colSpan={colspan}>
          <div className="u-a-center u-bg-white u-p-xxl u-light">
            <img className="u-mb-s" alt="אין מידע" role="presentation" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAxKSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgIDxlbGxpcHNlIGZpbGw9IiNGNUY1RjUiIGN4PSIzMiIgY3k9IjMzIiByeD0iMzIiIHJ5PSI3Ii8+CiAgICA8ZyBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0iI0Q5RDlEOSI+CiAgICAgIDxwYXRoIGQ9Ik01NSAxMi43Nkw0NC44NTQgMS4yNThDNDQuMzY3LjQ3NCA0My42NTYgMCA0Mi45MDcgMEgyMS4wOTNjLS43NDkgMC0xLjQ2LjQ3NC0xLjk0NyAxLjI1N0w5IDEyLjc2MVYyMmg0NnYtOS4yNHoiLz4KICAgICAgPHBhdGggZD0iTTQxLjYxMyAxNS45MzFjMC0xLjYwNS45OTQtMi45MyAyLjIyNy0yLjkzMUg1NXYxOC4xMzdDNTUgMzMuMjYgNTMuNjggMzUgNTIuMDUgMzVoLTQwLjFDMTAuMzIgMzUgOSAzMy4yNTkgOSAzMS4xMzdWMTNoMTEuMTZjMS4yMzMgMCAyLjIyNyAxLjMyMyAyLjIyNyAyLjkyOHYuMDIyYzAgMS42MDUgMS4wMDUgMi45MDEgMi4yMzcgMi45MDFoMTQuNzUyYzEuMjMyIDAgMi4yMzctMS4zMDggMi4yMzctMi45MTN2LS4wMDd6IiBmaWxsPSIjRkFGQUZBIi8+CiAgICA8L2c+CiAgPC9nPgo8L3N2Zz4K" />
            <p>אין מידע</p>
          </div>
        </td>
      </tr>
    )
  }

  const renderTable = (rows) => {
    return rows.map((row, index) => {
      let key = row.key;

      if (!key) {
        key = (typeof rowKey === 'function') ? rowKey() : `tablebody-${rowKey}-${index}`;
      }

      return (
        <TableRow
          key={key}
          row={row}
          columns={columns}
        />
      )
    });
  }

  const tableRows = (showPages) ? paginate(rows, perPage, page) : rows;
  const renderComponent = (rows.length > 0) ? (renderTable(tableRows)) : renderEmpty();

  return (
    <tbody>
      {renderComponent}
    </tbody>
  )

  // return (
  //   <tbody>
  //     {tableRows.map((row, index) => (
  //       <TableRow
  //         bordered={bordered}
  //         key={row.key}
  //         row={row}
  //         columns={columns}
  //       />
  //     ))}
  //   </tbody>
  // )
}

TableBody.propTypes = {
  bordered: PropTypes.bool,
  key: PropTypes.string,
  rows: PropTypes.array,
  columns: PropTypes.array
}

TableBody.defaultProps = {
  bordered: false,
  rows: [],
  columns: []
}

export default TableBody

