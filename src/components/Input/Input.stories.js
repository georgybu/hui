import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { Input, Grid } from '../../index';

storiesOf('Input', module)
  .add('default', () => (
    <Fragment>
      <Grid rest={6}>
        <Grid.Column>
          <Input />
        </Grid.Column>
        <Grid.Column>
          <Input placeholder="ממלא מקום" />
        </Grid.Column>
         <Grid.Column>
          <Input disabled />
        </Grid.Column>
         <Grid.Column>
          <Input disabled placeholder="ממלא מקום" />
        </Grid.Column>
      </Grid>
    </Fragment>
  ))
