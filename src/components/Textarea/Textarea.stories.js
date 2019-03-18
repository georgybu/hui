import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { Grid, Textarea } from '../../index';

storiesOf('Textarea', module)
  .add('default', () => (
    <Grid col={4}>
      <Grid.Column>
        <Textarea>ערך</Textarea>
      </Grid.Column>
      <Grid.Column>
        <Textarea disabled></Textarea>
      </Grid.Column>
      <Grid.Column>
        <Textarea placeholder="טקסט ממלא מקום"></Textarea>
      </Grid.Column>
      <Grid.Column>
        <Textarea id="about" label="קצת אודותיך" placeholder="כאן זה המקום לספר כל מה שאתה רוצה על עצמך"></Textarea>
      </Grid.Column>
    </Grid>
  ))
  .add('auto size', () => (
    <Grid>
      <Grid.Column rest={6}>
        <Textarea autosize placeholder="גובה אוטומטי לפי התוכן" />
      </Grid.Column>
      <Grid.Column rest={6}>
        <Textarea
          autosize={{minRows: 2, maxRows: 4}}
          placeholder="גובה אוטומטי לפי התוכן עם מינימום 2 שורות ומקסימום 4 שורות"
        />
      </Grid.Column>
    </Grid>
  ))
