import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '../../index';

storiesOf('Button', module)
  .add('default', () => (<Button>כפתור דוגמא</Button>))
  .add('primary', () => (<Button primary>כפתור ראשי</Button>))
  .add('danger', () => (<Button danger>כפתור סכנה</Button>))
  .add('disabled', () => (<Button disabled>כפתור לא פעיל</Button>))
  .add('loading', () => (<Button loading>כפתור במצב טוען</Button>))
  .add('content', () => (<Button content="תוכן בעזרת פרמטר"></Button>))
  .add('fluid', () => (<Button fluid>כפתור מקסימלי</Button>))
  .add('large', () => (
    <Fragment>
      <Button size="large">כפתור גדול</Button>
      <Button size="medium">כפתור בינוני / רגיל</Button>
      <Button size="small">כפתור קטן</Button>
    </Fragment>
  ))