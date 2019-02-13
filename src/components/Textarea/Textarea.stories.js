import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { Grid, Textarea } from '../../index';

storiesOf('Textarea', module)
  .add('default', () => (
    <Fragment>
      <Grid>
        <Grid.Column rest={4}>
          <Textarea></Textarea>
        </Grid.Column>
        <Grid.Column rest={4}>
          <Textarea disabled></Textarea>
        </Grid.Column>
        <Grid.Column rest={4}>
          <Textarea placeholder="טקסט ממלא מקום"></Textarea>
        </Grid.Column>
      </Grid>

      <Grid>
        <Grid.Column rest={6}>
          <Textarea autosize placeholder="גובה אוטומטי לפי התוכן"></Textarea>
        </Grid.Column>
        <Grid.Column rest={6}>
          <Textarea autosize={{minRows: 2, maxRows: 6}} placeholder="גובה אוטומטי לפי התוכן עם מינימום 2 שורות ומקסימום6 שורות"></Textarea>
        </Grid.Column>
      </Grid>
    </Fragment>
  ))
