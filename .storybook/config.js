import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { HsgProvider } from '../src';

const req = require.context('../src/components', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(story => <HsgProvider><div style={{ margin: '40px', direction: 'rtl' }}>{story()}</div></HsgProvider>)

configure(loadStories, module);
