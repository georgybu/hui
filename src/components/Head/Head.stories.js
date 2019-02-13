import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { Head } from '../../index';

storiesOf('Head', module)
  .addDecorator(withKnobs)
  .add('default', () => (<Head>כותרת עמוד</Head>))
  .add('title', () => (<Head title="כותרת עמוד ממאפיין"></Head>))
  .add('subtitle', () => (<Head subtitle="כותרת משנה">כותרת עמוד</Head>))
  .add('pdf button', () => (<Head pdfUrl="/" subtitle="כותרת משנה">כותרת עמוד</Head>))
  .add('dynamic', () => {
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
    