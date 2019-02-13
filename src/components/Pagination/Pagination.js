import React, { Component } from 'react';
import WithStyle from './Pagination.style';
import Pager from './Pager';
import PropTypes from 'prop-types';


/**
 * TODO: change this function to recieve only the needed data and not all object?!
 * Calculate total number of pages
 * @param {number} pageSize
 * @param {object} state
 * @param {object} props
 * @return {number}
 */
const calculatePage = (pageSize, state, props) => {
  if (typeof pageSize === 'undefined') {
    pageSize = state.pageSize;
  }

  return Math.floor((props.total - 1) / pageSize) + 1;
}


class Pagination extends Component {
  constructor(props) {
    super(props);

    let current = ('current' in props) ? props.current : props.defaultCurrent;
    let pageSize = props.pageSize;

    this.state = {
      current,
      pageSize
    }
  }

  render() {
    const {
      hideOnSinglePage,
      pageSize,
      total
    } = this.props;

    const {
      current,
      pageSize
    } = this.state;

    // hide pagination on single page, if needed
    if (hideOnSinglePage && total <= pageSize) {
      return null;
    }

    const pagerList = [];
    const allPages = calculatePage(undefined, this.state, this.props);
    const prevPage = current - 1 > 0 ? current - 1 : 0;
    const nextPage = current + 1 < allPages ? current + 1 : allPages;

    // TODO: set aria rules

    for (let index = 0; index < allPages; index++) {
      // const active = this.sta

    }


    return (
      <WithStyle>pagination</WithStyle>
    )
  }
}

Pagination.propTypes = {
  defaultCurrent: PropTypes.number,
  current: PropTypes.number,
  total: PropTypes.number,
  pageSize: PropTypes.number,
  showTotal: PropTypes.func,
  hideOnSinglePage: PropTypes.bool
}

Pagination.defaultProps = {
  pageSize: 10,
  hideOnSinglePage: false
}

export default Pagination;
