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
      current,
      pageSize
    } = this.state;

    // hide pagination on single page, if needed
    if (this.props.hideOnSinglePage && this.props.total <= this.props.pageSize) {
      return null;
    }

    const pagerList = [];
    const prevItemTitle = (this.props.prevTitle) ? this.props.prevTitle : 'הקודם';
    const nextItemTitle = (this.props.nextTitle) ? this.props.nextTitle : 'הבא';
    const allPages = calculatePage(undefined, this.state, this.props);
    const prevPage = current - 1 > 0 ? current - 1 : 0;
    const nextPage = current + 1 < allPages ? current + 1 : allPages;
    const prevItem = <Pager key="prev" page={prevItemTitle} disabled={current === 1} />;
    const nextItem = <Pager key="next" page={nextItemTitle} disabled={current === allPages - 1} />;

    // TODO: set aria rules

    pagerList.push(prevItem);

    for (let index = 1; index <= allPages; index++) {
      const active = current === index;
      pagerList.push(
        <Pager
          key={index}
          page={index}
          active={active}
        />
      )
    }

    pagerList.push(nextItem);


    return (
      <WithStyle>
        {pagerList}
      </WithStyle>
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
