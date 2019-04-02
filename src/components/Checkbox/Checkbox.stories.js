import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { Checkbox } from '../../index';
import Story from '../../../.storybook/components/Story';


storiesOf('Checkbox', module)
  .add('code', () => (
    <Fragment>
      <Story.Header
        title="תיבת סימון"
        info="רכיב תיבת סימון"
      />
      <Story.Group>
        <Story
          title="שימוש רגיל"
          info="שימוש רגיל של תיבת סימון"
        >
          <Checkbox>תיבת סימון</Checkbox>
          <br/>
          <Checkbox />
          <br/>
          <Checkbox defaultChecked>תיבת סימון מסומנת</Checkbox>
        </Story>

        <Story
          title="לא פעיל"
          info="תיבת סימון במצב לא פעיל"
        >
          <div>
            <Checkbox disabled>תיבת סימון לא פעילה</Checkbox>
            <br/>
            <Checkbox disabled />
            <br/>
            <Checkbox disabled defaultChecked>תיבת סימון לא פעילה</Checkbox>
          </div>
        </Story>

        <Story
          title="מצב לא מוגדר"
          info="ניתן להגדיר תיבת סימון במצב לא מוגדר, כלומר התיבה לא נמצאת במצב לחיץ ולא נמצאת במצב לא לחיץ."
        >
          <div>
            <Checkbox indeterminate>תיבת סימון במצב לא מוגדר</Checkbox>
          </div>
        </Story>
      </Story.Group>

      <Story.PropsTable type={Checkbox} />
    </Fragment>
  ))
