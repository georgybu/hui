import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { Container } from '../../index';
import Story from '../../../.storybook/components/Story';



storiesOf('Container', module)
  .add('code', () => (
    <Fragment>
      <Story.Header
        title="תיבת מיכל"
        info="הגדרת רוחב המסך שבו נשתמש להצגת התוכן שלנו"
      />
      <Story.Group full>
        <Story
          title="שימוש רגיל"
          info="שימוש רגיל"
        >
          <div>
            TODO: add doc
          </div>
        </Story>
      </Story.Group>
      <Story.PropsTable type={Container} />
    </Fragment>
  ))
