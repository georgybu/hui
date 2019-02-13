import React from 'react';
import { storiesOf } from '@storybook/react';
import { Strip } from '../../index';
import { boolean, text } from '@storybook/addon-knobs';

storiesOf('Strip', module)
  .add('default', () => (<Strip title="כותרת סטריפ">תוכן</Strip>))
  .add('subtitle', () => (<Strip title="כותרת סטריפ" subtitle="תת כותרת סטריפ">תוכן</Strip>))
  .add('header', () => (<Strip title="כותרת סטריפ" header="כותרת תוכן">תוכן</Strip>))
  .add('collapse', () => (<Strip collapse title="כותרת סטריפ" header="כותרת תוכן">תוכן</Strip>))
  .add('success', () => (<Strip success title="כותרת סטריפ" header="כותרת תוכן">סטריפ הצלחה</Strip>))
  .add('danger', () => (<Strip danger title="כותרת סטריפ" header="כותרת תוכן">סטריפ כשלון</Strip>))
  .add('info', () => (<Strip info title="כותרת סטריפ" header="כותרת תוכן">סטריפ מידע</Strip>))
  .add('dynamic', () => {
    return (
      <Strip
        title={text('title', 'כותרת סטריפ')} 
        subtitle={text('subtitle', 'כותרת משנה')}
        header={text('header', 'כותרת תוכן')}
        collapse={boolean('collapse', true)}
        close={boolean('close', false)}
        content={text('content', 'תוכן סטריפ')}
      >
      </Strip>
    )
  })