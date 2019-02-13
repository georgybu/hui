import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { Pagination } from '../../index';


storiesOf('Pagination', module)
  .add('default', () => (<Pagination defaultCurrent={1} total={50} />))
  .add('more', () => (<Pagination defaultCurrent={7} total={500} />))
  .add('size', () => (<Pagination defaultCurrent={1} total={50} pageSize={20} />))
  .add('total', () => (
    <Fragment>
      <Pagination
        defaultCurrent={1}
        total={85}
        pageSize={20}
        showTotal={total => `סך הכל ${total} פריטים`}
      />

      <br/><br/>

      <Pagination
        defaultCurrent={1}
        total={85}
        pageSize={20}
        showTotal={(total, range) => `${range[0]}-${range[1]} מתוך ${total}`}
      />
    </Fragment>
    ))
    .add('hide on single page', () => (<Pagination hideOnSinglePage defaultCurrent={1} total={8} />))
