import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { Checkbox } from '../../index';


storiesOf('Checkbox', module)
  .add('default', () => (
    <Fragment>
      <Checkbox>תיבת סימון</Checkbox>
      <Checkbox defaultChecked={true}>תיבת סימון מסומנת מראש</Checkbox>
      <Checkbox indeterminate={true}>תיבת סימון במצב לא מוגדר</Checkbox>
      <br/>
      <Checkbox disabled={true}>תיבת סימון לא פעילה</Checkbox>
      <br/>
      <Checkbox defaultChecked={true} disabled={true}>תיבת סימון לא פעילה ומסומנת</Checkbox>
    </Fragment>
  ))
