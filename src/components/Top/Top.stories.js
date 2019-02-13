import React from 'react';
import { storiesOf } from '@storybook/react';
import { Top } from '../../index';

storiesOf('Top', module)
  .add('default', () => (<Top />))
  .add('no logo', () => (<Top showLogo={false} />))