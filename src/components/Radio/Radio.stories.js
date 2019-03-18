import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { Radio } from '../../index';


function onChange(e) {
  console.log(`radio checked:${e.target.value}`);
}


storiesOf('Radio', module)
  .add('default', () => (
    <Fragment>
      <Radio>כפתור רדיו</Radio>
      <Radio defaultChecked={true}>כפתור רדיו מסומן מראש</Radio>
      <Radio disabled={true}>כפתור רדיו לא פעיל</Radio>
      <Radio defaultChecked={true} disabled={true}>כפתור רדיו לא פעיל ומסומן</Radio>
    </Fragment>
  ))
  .add('group', () => (
    <Fragment>
      <Radio.Group name="radiogroup" defaultValue={2}>
        <Radio value={1}>אפשרות ראשונה</Radio>
        <Radio value={2}>אפשרות שניה</Radio>
        <Radio value={3}>אפשרות שלישית</Radio>
      </Radio.Group>
      <br/><br/>
      <Radio.Group name="radiogroup2" disabled defaultValue={2}>
        <Radio value={1}>אפשרות ראשונה</Radio>
        <Radio value={2}>אפשרות שניה</Radio>
        <Radio value={3}>אפשרות שלישית</Radio>
      </Radio.Group>
    </Fragment>
  ))
  .add('group vertical', () => (
    <Radio.Group name="radiogroup" defaultValue={2} vertical>
      <Radio value={1}>אפשרות ראשונה</Radio>
      <Radio value={2}>אפשרות שניה</Radio>
      <Radio value={3}>אפשרות שלישית</Radio>
    </Radio.Group>
  ))
  .add('group as buttons', () => (
    <Fragment>
      <Radio.Group name="radiogroup1" defaultValue={2} onChange={onChange}>
        <Radio type="button" value={1}>אסיה</Radio>
        <Radio type="button" value={2}>אירופה</Radio>
        <Radio type="button" value={3}>אמריקה</Radio>
      </Radio.Group>
      <br/><br/>
      <Radio.Group name="radiogroup2" defaultValue={2}>
        <Radio type="button" value={1} disabled>אסיה</Radio>
        <Radio type="button" value={2}>אירופה</Radio>
        <Radio type="button" value={3}>אמריקה</Radio>
      </Radio.Group>
      <br/><br/>
      <Radio.Group name="radiogroup3" disabled defaultValue={2}>
        <Radio type="button" value={1}>אסיה</Radio>
        <Radio type="button" value={2}>אירופה</Radio>
        <Radio type="button" value={3}>אמריקה</Radio>
      </Radio.Group>
    </Fragment>
  ))
