import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '../../index';
import Story from '../../../.storybook/components/Story';


storiesOf('Button', module)
  .add('code', () => (
    <Fragment>
      <Story.Header
        title="כםתור"
        info="רכיב שמאפשר הפעלה של פעולה מסוימת"
      >
        <Fragment>
          <h2>מתי להשתמש</h2>
          <p>
            כפתור נועד לביצוע פעולה, או מספר פעולות, כתוצאה מלחיצה של הגולש.
            לחיצה על הכפתור תפעיל לוגיקה עסקית במסך.
          </p>
        </Fragment>
      </Story.Header>

      <Story.Group>
        <Story
          title="שימוש רגיל"
          info="סוגי הכפתור הקיימים בשימוש רגיל"
        >
          <div>
            <Button>כפתור רגיל</Button>
            <Button primary>כפתור ראשי</Button>
            <Button danger>כפתור סכנה</Button>
            <Button disabled>כפתור לא פעיל</Button>
          </div>
        </Story>

        <Story
          title="טעינה"
          info="אייקון טעינה מוצג בכפתור כדי לייצג מצב שהפעולה מתמשכת והגולש צריך לחכות לסיום הפעולה"
        >
          <div>
            <Button loading>כפתור במצב טוען</Button>
            <Button primary loading>כפתור ראשי</Button>
            <Button danger loading>כפתור סכנה</Button>
          </div>
        </Story>

        <Story
          title="תוכן באמצעות פרמטר"
          info="ניתן לקבוע את תוכן הכפתור באמצעות פרמטר content"
        >
          <div>
            <Button content="תוכן בעזרת פרמטר" />
          </div>
        </Story>

        <Story
          title="מקסימום רוחב"
          info="הוספת מאפיין fluid תגרום לכפתור להימתח למקסימום רוחב האפשרי"
        >
          <div>
            <Button fluid>כפתור מקסימלי</Button>
          </div>
        </Story>

        <Story
          title="גדלים"
          info="ישנם 3 גדלים של כפתור שניתן להשתמש בהם באמצעות הגדרת המאפיין size"
        >
          <div>
            <Button size="large">כפתור גדול</Button>
            <Button size="medium">כפתור בינוני / רגיל</Button>
            <Button size="small">כפתור קטן</Button>
          </div>
        </Story>

        <Story
          title="קבוצת כפתורים"
          info="כפתורים יכולים להופיע כקבוצה על ידי שימוש ברכיב Button.Group"
        >
          <Button.Group>
            <Button>ימין</Button>
            <Button>מרכז</Button>
            <Button>שמאל</Button>
          </Button.Group>
        </Story>
      </Story.Group>

      <Story.PropsTable type={Button} />
    </Fragment>
  ))

