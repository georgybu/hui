import React from 'react';
import { storiesOf } from '@storybook/react';
import { Grid, Select } from '../../index';

const Column = Grid.Column;
const Option = Select.Option;

storiesOf('Select', module)
  .add('default', () => (
    <Grid col="4">
      <Column>
        <Select defaultValue="2">
          <Option value="1">אפשרות ראשונה</Option>
          <Option value="2">אפשרות שניה</Option>
          <Option value="3" disabled>אפשרות שלישית</Option>
          <Option value="4">אפשרות רביעית</Option>
        </Select>
      </Column>
      <Column>
        <Select defaultValue="2" placeholder="בחר אפשרות מהרשימה">
          <Option value="1">אפשרות ראשונה</Option>
          <Option value="2">אפשרות שניה</Option>
          <Option value="3" disabled>אפשרות שלישית</Option>
          <Option value="4">אפשרות רביעית</Option>
        </Select>
      </Column>
      <Column>
        <Select defaultValue="2" disabled>
          <Option value="1">אפשרות ראשונה</Option>
          <Option value="2">אפשרות שניה</Option>
          <Option value="3" disabled>אפשרות שלישית</Option>
          <Option value="4">אפשרות רביעית</Option>
        </Select>
      </Column>
      <Column>
        <Select defaultValue="2" loading>
          <Option value="1">אפשרות ראשונה</Option>
          <Option value="2">אפשרות שניה</Option>
          <Option value="3" disabled>אפשרות שלישית</Option>
          <Option value="4">אפשרות רביעית</Option>
        </Select>
      </Column>
    </Grid>
  ))
  .add('with search field', () => (
    <Select
      showSearch
      defaultValue="2"
      placeholder="בחר אפשרות"
    >
          <Option value="1">אפשרות ראשונה</Option>
          <Option value="2">אפשרות שניה</Option>
          <Option value="3" disabled>אפשרות שלישית</Option>
          <Option value="4">אפשרות רביעית</Option>
        </Select>
  ))
