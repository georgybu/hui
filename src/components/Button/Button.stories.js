import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '../../index';

storiesOf('Button', module)
  .add('default', () => (
    <Fragment>
      <Button>כפתור רגיל</Button>
      <Button primary>כפתור ראשי</Button>
      <Button danger>כפתור סכנה</Button>
      <Button disabled>כפתור לא פעיל</Button>
    </Fragment>
  ))
  .add('loading', () => (
    <Fragment>
      <Button loading>כפתור במצב טוען</Button>
      <Button primary loading>כפתור ראשי</Button>
      <Button danger loading>כפתור סכנה</Button>
    </Fragment>
  ))
  .add('content', () => (<Button content="תוכן בעזרת פרמטר"></Button>))
  .add('fluid', () => (<Button fluid>כפתור מקסימלי</Button>))
  .add('sizes', () => (
    <Fragment>
      <Button size="large">כפתור גדול</Button>
      <Button size="medium">כפתור בינוני / רגיל</Button>
      <Button size="small">כפתור קטן</Button>
    </Fragment>
  ))
