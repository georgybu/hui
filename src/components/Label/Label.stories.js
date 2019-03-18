import React from 'react';
import { storiesOf } from '@storybook/react';
import { Label } from '../../index';


storiesOf('Label', module)
.add('default', () => (
  <Label forName="firstname">שם פרטי</Label>
))
