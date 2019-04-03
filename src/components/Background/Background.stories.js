import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { Background } from '../../index';
import Story from '../../../.storybook/components/Story';


storiesOf('Background', module)
  .add('code', () => (
    <Fragment>
      <Story.Header
        title="תמונת רקע"
        info="הצגת תמונת רקע למערכת במידה והיא נמצאת כמערכת עצמאית ולא בתוך הפורטל"
      />
      <Story.Group full>
        <Story
          title="שימוש רגיל"
          info="הצגת התמונה"
        >
          <Background active={false} />
        </Story>
      </Story.Group>
      <Story.PropsTable type={Background} />
    </Fragment>
  ))
