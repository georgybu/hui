import React from 'react';
import Pagination from '../Pagination';
import { omit, isObject } from '../../utils/misc';


function buildPagination(props) {
  const {
    pagination,
    total,
    onChange
  } = props;

  if (pagination === false) {
    return null;
  }

  let paginationConfig = {};

  if (isObject(pagination)) {
    paginationConfig = omit(pagination, ['total']);
  }

  const onchange = paginationConfig.onChange;

  paginationConfig.onChange = function(page, pageSize) {
    if (typeof onChange === 'function') {
      onChange(page, pageSize);
    }

    if (typeof onchange === 'function') {
      onchange(page, pageSize);
    }
  }

  paginationConfig.className = 'u-mt-m u-mb-m';
  paginationConfig.total = total;

  return <Pagination {...paginationConfig} />
}


function TablePagination(props) {
  const paginationComponent = buildPagination(props);

  return paginationComponent;
}

export default TablePagination;
