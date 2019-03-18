import React, { Fragment } from 'react'
import Loader from '../Loader';
import Overlay from '../Overlay';


function TableLoading({active}) {
  return (active)
    ? <Fragment>
        <Overlay fullscreen={false} light />
        <Loader active />
      </Fragment>
    : null;
}

export default TableLoading;
