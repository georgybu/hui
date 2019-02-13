import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { Grid, Panel } from '../../index';

storiesOf('Panel', module)
  .add('types', () => (
    <Fragment>
      <Grid rest={4}>
        <Grid.Column><Panel type="normal">normal</Panel></Grid.Column>
        <Grid.Column><Panel type="light">light</Panel></Grid.Column>
        <Grid.Column><Panel type="dark">dark</Panel></Grid.Column>
        <Grid.Column><Panel type="primary">primary</Panel></Grid.Column>
        <Grid.Column><Panel type="secondary">secondary</Panel></Grid.Column>
      </Grid>
    </Fragment>
  ))
  .add('spacing', () => (
    <Fragment>
      <Grid rest={3}>
        <Grid.Column><Panel type="primary" spacing="empty">empty</Panel></Grid.Column>
        <Grid.Column><Panel type="primary" spacing="normal">normal</Panel></Grid.Column>
        <Grid.Column><Panel type="primary" spacing="large">large</Panel></Grid.Column>
      </Grid>
    </Fragment>
  ))
