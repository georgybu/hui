import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { Background } from '../../index';

storiesOf('Background', module)
  .add('default', () => (<Background />))
  .add('disable', () => (<Background active={false} />))
