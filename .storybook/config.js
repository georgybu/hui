import React from 'react';
import { configure, addDecorator, addParameters } from '@storybook/react';
import { addReadme, configureReadme } from 'storybook-readme';
import { HsgProvider } from '../src';


const req = require.context('../src/components', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addParameters({
  options: {
    name: 'harel'
  }
})

configureReadme({
    codeTheme: 'agate',
    StoryPreview: ({ children}) => children
})

addDecorator(addReadme);

addDecorator(story => <HsgProvider><div style={{ margin: '40px', direction: 'rtl' }}>{story()}</div></HsgProvider>)

configure(loadStories, module);
