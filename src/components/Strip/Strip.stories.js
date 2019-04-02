import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { Strip } from '../../index';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import Story from '../../../.storybook/components/Story';


storiesOf('Strip', module)
  .addDecorator(withKnobs)
  .add('code', () => (
    <Fragment>
      <Story.Header
        title="סטריפ"
        info="רכיב להצגת תוכן"
      />
      <Story.Group>
          <Story
            title="שימוש רגיל"
            info="שימוש רגיל של הסטריפ"
          >
            <Strip
              header="כותרת תוכן"
              title="כותרת סטריפ"
              subtitle="תת כותרת סטריפ"
            >
                תוכן הסטריפ
            </Strip>
          </Story>

          <Story
            title="פתיחה וסגירה"
            info="הוספת אפשרות פתיחה וסגירה תוכן הסטריפ בעזרת לחיצה על הסמן המתאים"
          >
            <Strip
              collapse
              title="כותרת סטריפ"
              header="כותרת תוכן"
            >
              <div>שורה ראשונה</div>
              <div>שורה שניה</div>
              <div>שורה שלישית</div>
              <div>שורה רביעית</div>
            </Strip>
          </Story>
          <Story
            title="סוגים"
            info="סוגי סטריפים קבועים מראש על מנת להציג מצבי כשלון, הצלחה והודעה"
          >
            <Strip success title="כותרת סטריפ" header="כותרת תוכן">סטריפ הצלחה</Strip>
            <Strip danger title="כותרת סטריפ" header="כותרת תוכן">סטריפ כשלון</Strip>
            <Strip info title="כותרת סטריפ" header="כותרת תוכן">סטריפ מידע</Strip>
          </Story>
      </Story.Group>
      <Story.PropsTable type={Strip} />
    </Fragment>
  ))

  .add('playground', () => {
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



