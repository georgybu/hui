import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { Label } from '../../index';
import Story from '../../../.storybook/components/Story';


storiesOf('Label', module)
.add('code', () => (
  <Fragment>
    <Story.Header
      title="כותרת שדה"
      info="כותרת בשימוש לשדות בטופס"
    />
    <Story.Group full>
      <Story
        title="שימוש רגיל"
        info="כותרת שדה"
      >
        <Label forName="firstname">שם פרטי</Label>
      </Story>
    </Story.Group>

    <Story.PropsTable type={Label} />
  </Fragment>

))
