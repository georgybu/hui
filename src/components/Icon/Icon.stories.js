import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  IconLink,
  IconPhone,
  IconReload,
  IconTimer,
  IconSave
} from '../../index';


const styleRow = {
  display: 'flex',
  flexWrap: 'wrap'
}

const styleCol = {
  width: '20%',
  textAlign: 'center',
  marginBottom: '40px'
}


const Col = ({children, name}) => (
  <div style={styleCol}>
    {children}
    <p style={{paddingTop: '8px'}}>{name}</p>
  </div>
)


storiesOf('Icon', module)
  .add('default', () => (
    <div style={styleRow}>
      <Col name="IconLink"><IconLink /></Col>
      <Col name="IconPhone"><IconPhone /></Col>
      <Col name="IconReload"><IconReload /></Col>
      <Col name="IconTimer"><IconTimer /></Col>
      <Col name="IconSave"><IconSave /></Col>
    </div>))
  .add('sizes', () => (
    <div style={styleRow}>
      <Col name="IconLink"><IconPhone size="small" /></Col>
      <Col name="IconLink"><IconPhone size="medium" /></Col>
      <Col name="IconLink"><IconPhone size="large" /></Col>
      <Col name="IconLink"><IconPhone size="xlarge" /></Col>
      <Col name="IconLink"><IconPhone size="xxlarge" /></Col>
    </div>
  ))
  .add('color', () => (
    <div style={styleRow}>
      <Col name="success"><IconPhone size="large" color="success" /></Col>
      <Col name="danger"><IconPhone size="large" color="danger" /></Col>
      <Col name="link"><IconPhone size="large" color="link" /></Col>
      <Col name="primary1"><IconPhone size="large" color="primary1" /></Col>
      <Col name="primary2"><IconPhone size="large" color="primary2" /></Col>
      <Col name="primary3"><IconPhone size="large" color="primary3" /></Col>
      <Col name="primary4"><IconPhone size="large" color="primary4" /></Col>
    </div>
  ))