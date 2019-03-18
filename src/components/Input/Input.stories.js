import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { Input, Grid, Icon, Button } from '../../index';

let inputref;

function focusInput(e) {
  inputref.focus();
}

function blurInput(e) {
  inputref.blur();
}

function change(e) {
  const { value } = e.target;
  console.log(e);
  console.log('value:', value);
}

storiesOf('Input', module)
  .add('default', () => (
    <Fragment>
      <Grid col={6}>
        <Grid.Column>
          <Input onChange={change} />
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
  .add('with label', () => (
    <Grid col={6}>
      <Grid.Column>
        <Input label="שם פרטי" id="firstname" />
      </Grid.Column>
      <Grid.Column>
        <Input label="שם משפחה" id="lastname" required />
      </Grid.Column>
      <Grid.Column>
        <Input label="תעודת זהות" id="uid" />
      </Grid.Column>
      <Grid.Column>
        <Input label="כתובת" id="address" />
      </Grid.Column>
    </Grid>
  ))
  .add('before & after', () => (
    <Fragment>
      <Grid col={6}>
        <Grid.Column>
          <Input label="טלפון" id="phone" addonBefore="https://" addonAfter="co.il" defaultValue="www.harel-group.co.il" />
        </Grid.Column>
        <Grid.Column>
          <Input addonAfter="₪" placeholder="סכום בשקלים" />
        </Grid.Column>
        <Grid.Column>
          <Input addonBefore={<Icon name="phone" />} placeholder="טלפון לקוח" />
        </Grid.Column>
        <Grid.Column>
          <Input allowClear placeholder="עם כפתור מחיקה" />
        </Grid.Column>
      </Grid>
    </Fragment>
  ))
  .add('prefix & suffix', () => (
    <Grid col={6}>
      <Grid.Column>
        <Input label="טלפון" id="phone" prefix={<Icon name="phone" />} placeholder="מספר טלפון" />
      </Grid.Column>
      <Grid.Column>
        <Input suffix="₪" placeholder="סכום ביטוח" />
      </Grid.Column>
      <Grid.Column>
        <Input prefix={<Icon name="phone" />} suffix="₪" placeholder="גם תחילית וגם סופית" />
      </Grid.Column>
      <Grid.Column>
        <Input disabled prefix={<Icon name="phone" />} placeholder="מספר טלפון" />
      </Grid.Column>
      <Grid.Column>
        <Input label="טלפון" id="phone" prefix={<Icon name="phone" />} suffix="₪" addonBefore="https://" addonAfter="co.il" defaultValue="www.harel-group.co.il" />
      </Grid.Column>
    </Grid>
  ))
  .add('allow clear', () => (
    <Grid col={6}>
      <Grid.Column>
        <Input placeholder="הזן שם משתמש" allowClear />
      </Grid.Column>
    </Grid>
  ))
  .add('invalid state', () => (
    <Fragment>
      <Grid col={6}>
        <Grid.Column>
          <Input invalid placeholder="דואר אלקטרוני" />
        </Grid.Column>
        <Grid.Column>
          <Input invalid placeholder="שם מלא" explain="יש צורך בהזנת שם מלא" />
        </Grid.Column>
      </Grid>
    </Fragment>
  ))
  .add('input actions', () => (
    <Fragment>
      <Input ref={r => inputref = r} />
      <br/><br/>
      <Button onClick={focusInput}>focus input</Button>
      <Button onClick={blurInput}>blur input</Button>
    </Fragment>
  ))
