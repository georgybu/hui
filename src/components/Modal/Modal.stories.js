import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { Modal, Button } from '../../index';


storiesOf('Modal', module)
  .add('default', () => (
    <Fragment>
      <Button>
        open modal
      </Button>
      <Modal
        title="כותרת חלון מודל"
        visible={true}

      >
        <p>תוכן חלון מודל</p>
        <p>תוכן חלון מודל</p>
        <p>תוכן חלון מודל</p>
        <p>תוכן חלון מודל</p>
      </Modal>
    </Fragment>
  ))
