import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { Loader } from '../../index';
import Story from '../../../.storybook/components/Story';

const style = {
  position: 'relative',
  height: '100px',
  border: '1px solid #ddd',
  margin: '8px'
};

storiesOf('Loader', module)
  .add('code', () => (
    <Fragment>
      <Story.Header
        title="חיווי טעינה"
        info=""
      />
      <Story.Group>
        <Story
          title="שימוש רגיל"
          info="חיווי טעינה פעיל במידה ומופיע המאפיין active"
        >
          <Loader active />
        </Story>

        <Story
          title="עם טקסט"
          info="ניתן להוסיף טקסט שיופיע מתחת לאייקון"
        >
          <Loader active>טוען נתונים</Loader>
        </Story>

        <Story
          title="בתוך השורה"
          info="ניתן להגדיר שחיווי הטעינה יופיע בתוך השורה ולא במיקום אבסולוטי על ידי המאפיין inline"
        >
          <Loader active inline />
        </Story>

        <Story
          title="נראות הפוכה"
          info="במידה והרקע הוא כהה ניתן להפוך את הצבעים של החיווי לבהיר על ידי הוספת המאפיין inverted"
        >
          <div style={{...style, backgroundColor: '#003f80'}}>
            <Loader active inverted />
          </div>
        </Story>

        <Story
          title="גדלים"
          info="ישנם מספר אפשרויות גדלים לאייקון טעינה"
        >
          <div>
            <div style={style}><Loader active size="small">טוען נתונים</Loader></div>
            <div style={style}><Loader active>טוען נתונים</Loader></div>
            <div style={style}><Loader active size="large">טוען נתונים</Loader></div>
            <div style={style}><Loader active size="xlarge">טוען נתונים</Loader></div>
            <div style={style}><Loader active size="xxlarge">טוען נתונים</Loader></div>
          </div>
        </Story>
      </Story.Group>

      <Story.PropsTable type={Loader} />
    </Fragment>
  ))
