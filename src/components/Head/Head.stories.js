import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { Head } from '../../index';
import Story from '../../../.storybook/components/Story';


storiesOf('Head', module)
  .addDecorator(withKnobs)
  .add('code', () => (
    <Fragment>
      <Story.Header
        title="כותרת עמוד"
        info="כותרת שמופיע בראש כל עמוד במערכת"
      />
      <Story.Group>
        <Story
          title="שימוש רגיל"
          info="תצוגה רגילה של כותרת עמוד"
        >
          <Head subtitle="כותרת משנה">כותרת עמוד</Head>
        </Story>

        <Story
          title="אייקון הדפסה"
          info="הוספה של פעולת הדפסה בכותרת על ידי הוספת המאפיין pdfUrl"
        >
          <Head pdfUrl="/">כותרת עמוד</Head>
        </Story>
      </Story.Group>
      <Story.PropsTable type={Head} />
    </Fragment>
  ))
  .add('default', () => (<Head>כותרת עמוד</Head>))
  .add('playground', () => {
    const showPdf = boolean('pdfUrl', true);
    const pdfUrl = (showPdf) ? '#' : null;

    return (
      <Head
        title={text('title', 'כותרת עמוד')}
        subtitle={text('subtitle', 'כותרת משנה')}
        pdfUrl={pdfUrl}
      ></Head>
    )
  })
