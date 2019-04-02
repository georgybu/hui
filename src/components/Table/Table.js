import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TableWithStyle from './Table.style';
import TableHead from './TableHead';
import TableBody from './TableBody';
import TableFoot from './TableFoot';
import Caption from './Caption';
import TablePagination from './TablePagination';
import { isInteger } from '../../utils';
import TableLoading from './TableLoading';
import TableWrap from './TableWrap';
import TableColgroup from './TableColgroup';

const DEFAULT_PAGE_SIZE = 10;

function noop() {}


class Table extends Component {
  constructor(props) {
    super(props);

    const {
      pagination
    } = this.props;

    const hasPagination = !!pagination;
    const perPage = (isInteger(pagination.pageSize)) ? pagination.pageSize : DEFAULT_PAGE_SIZE;

    this.state = {
      page: 1,
      hasPagination,
      perPage
    }
  }

  paginationOnChange = (page) => {
    const {
      onChange
    } = this.props; // TODO: add onchange

    if (this.state.page !== page) {
      this.setState({
        page
      })
    }
  }

  render() {
    const {
      columns,
      dataSource,
      headVisible,
      summary,
      caption,
      pagination,
      bordered,
      loading,
      rowKey,
      foot,
      direction
    } = this.props;

    const {
      perPage,
      page,
      hasPagination
    } = this.state;

    const colspan = (columns.length > 1) ? columns.length : null;
    const headVisibleValue = !(headVisible === false);
    let totalRowsCount = pagination.total;
    if (!totalRowsCount) {
      totalRowsCount = (Array.isArray(dataSource)) ? dataSource.length : 0;
    }

    return (
      <TableWrap direction={direction}>
        <TableLoading active={loading} />
        <TableWithStyle bordered={bordered} summary={summary}>
          <Caption>{caption}</Caption>
          <TableColgroup columns={columns} />
          <TableHead
            visible={headVisibleValue}
            columns={columns}
            rowKey={rowKey}
          />
          <TableBody
            page={page}
            perPage={perPage}
            showPages={hasPagination}
            columns={columns}
            rows={dataSource}
            rowKey={rowKey}
          />
          <TableFoot
            colspan={colspan}
            foot={foot}
          />
        </TableWithStyle>
        <TablePagination pagination={pagination} total={totalRowsCount} onChange={this.paginationOnChange} />
      </TableWrap>
    )
  }
}

Table.propTypes = {
  dataSource: PropTypes.array,
  columns: PropTypes.array,
  headVisible: PropTypes.bool,
  summary: PropTypes.string,
  pagination: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.object
  ]),
  bordered: PropTypes.bool,
  loading: PropTypes.bool,
  rowKey: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func
  ]),
  onChange: PropTypes.func,
  foot: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func
  ])
}

Table.defaultProps = {
  dataSource: [],
  columns: [],
  headVisible: true,
  pagination: true,
  bordered: false,
  loading: false,
  rowKey: 'key',
  onChange: noop
}

export default Table;
