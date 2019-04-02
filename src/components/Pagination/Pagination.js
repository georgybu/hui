import React, { Component } from 'react';
import WithStyle from './Pagination.style';
import Pager from './Pager';
import Total from './Total';
import PropTypes from 'prop-types';
import { isInteger } from '../../utils';


function noop() {}


/**
 * Calculate total number of pages
 * @param {number} total
 * @param {number} pageSize
 * @return {number}
 */
const calculatePage = (total, pageSize) => {
  return Math.floor((total - 1) / pageSize) + 1;
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

  prev = () => {
    if (this.hasPrev()) {
      this.handleChange(this.state.current - 1);
    }
  }

  next = () => {
    if (this.hasNext()) {
      this.handleChange(this.state.current + 1);
    }
  }

  last = () => {
    const {
      total
    } = this.props;

    const {
      pageSize
    } = this.state;

    if (this.hasNext()) {
      const allPages = calculatePage(total, pageSize);
      this.handleChange(allPages);
    }
  }

  first = () => {
    if (this.hasPrev()) {
      this.handleChange(1);
    }
  }

  hasPrev = () => (this.state.current > 1);
  hasNext = () => {
    const {
      total
    } = this.props;

    const {
      current,
      pageSize
    } = this.state;

    return current < calculatePage(total, pageSize);
  };

  /**
   * Handle page change
   */
  handleChange = (p) => {
    let page = p;
    const { total } = this.props;
    const { pageSize } = this.state;

    if (this.isValid(page)) {
      const currentPage = calculatePage(total, pageSize);
      if (page > currentPage) {
        page= currentPage;
      }

      this.setState({ current: page });
      this.props.onChange(page, pageSize);

      return page;
    }

    return this.state.current;
  }

  /**
   * Check page number is valid
   * @param {number} page
   * @return {boolean}
   */
  isValid = (page) => {
    return isInteger(page) && page >= 1 && page !== this.state.current;
  }

  runIfEnter = (event, callback, ...restParams) => {
    if (event.key === 'Enter' || event.charCode === 13) {
      callback(...restParams);
    }
  }

  render() {
    const {
      current,
      pageSize
    } = this.state;

    const {
      hideOnSinglePage,
      total,
      prevTitle,
      nextTitle,
      lastTitle,
      firstTitle,
      hideEdges,
      showTotal,
      ...rest
    } = this.props;

    // hide pagination on single page, if needed
    if (hideOnSinglePage && total <= this.props.pageSize) {
      return null;
    }

    const buffer = 2;
    const pagerList = [];
    const prevItemTitle = (prevTitle) ? prevTitle : 'הקודם';
    const nextItemTitle = (nextTitle) ? nextTitle : 'הבא';
    const lastItemTitle = (lastTitle) ? lastTitle : 'אחרון';
    const firstItemTitle = (firstTitle) ? firstTitle : 'ראשון';
    const allPages = calculatePage(total, pageSize);
    let startCount = 1;
    let endCount = allPages;

    if (allPages > 5) {
      startCount = Math.max(1, current - buffer);
      endCount = Math.min(current + buffer, allPages);

      if (current - 1 <= buffer) {
        endCount = 1 + buffer * 2;
      }

      if (allPages - current <= buffer) {
        startCount = allPages - buffer * 2;
      }
    }

    const prevItem = (
      <Pager
        key="prev"
        page={prevItemTitle}
        disabled={current === 1}
        aria-disabled={current === 1}
        onClick={this.prev}
        onKeyPress={this.runIfEnter}
      />
    );

    const nextItem = (
      <Pager
        key="next"
        page={nextItemTitle}
        disabled={current === allPages}
        aria-disabled={current === allPages}
        onClick={this.next}
        onKeyPress={this.runIfEnter}
      />
    );

    const lastItem = (
      <Pager
        key="last"
        page={lastItemTitle}
        disabled={current === allPages}
        aria-disabled={current === allPages}
        onClick={this.last}
        onKeyPress={this.runIfEnter}
      />
    );

    const firstItem = (
      <Pager
        key="first"
        page={firstItemTitle}
        disabled={current === 1}
        aria-disabled={current === 1}
        onClick={this.first}
        onKeyPress={this.runIfEnter}
      />
    );

    if (!hideEdges) {
      pagerList.push(firstItem);
    }

    pagerList.push(prevItem);

    for (let index = startCount; index <= endCount; index++) {
      const active = current === index;
      pagerList.push(
        <Pager
          key={index}
          page={index}
          active={active}
          onClick={this.handleChange}
          onKeyPress={this.runIfEnter}
        />
      )
    }

    pagerList.push(nextItem);

    if (!hideEdges) {
      pagerList.push(lastItem);
    }

    if (showTotal) {
      pagerList.push(
        <Total key="total">
          {showTotal(
            total,
            [
              (current - 1) * pageSize + 1,
              current * pageSize > total ? total : current * pageSize
            ]
          )}
        </Total>
      )
    }

    return (allPages > 0) ? (
      <WithStyle {...rest} role="navigation">
        {pagerList}
      </WithStyle>
    ) : null;
  }
}

Pagination.propTypes = {
  defaultCurrent: PropTypes.number,
  current: PropTypes.number,
  total: PropTypes.number,
  pageSize: PropTypes.number,
  hideOnSinglePage: PropTypes.bool,
  hideEdges: PropTypes.bool,
  showTotal: PropTypes.func
}


Pagination.defaultProps = {
  pageSize: 10,
  hideOnSinglePage: false,
  onChange: noop,
  defaultCurrent: 1,
  total: 0
}

export default Pagination;
