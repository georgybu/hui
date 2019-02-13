import React, {Fragment} from 'react';
import { storiesOf } from '@storybook/react';
import { Grid } from '../../index';
import styled from 'styled-components';

const BoxStyle = styled.div`
  padding: 8px;
  text-align: center;
  background: rgba(147, 128, 108, 0.2);
  direction: ltr;
  border: 1px solid #ccc;
`;

const cols = (count) => (
  [...Array(count)].map((x,i) => (
    <Grid.Column key={i}><BoxStyle>{i+1} of {count}</BoxStyle></Grid.Column>
  ))
)

storiesOf('Grid', module)
  .add('automatic', () => (
    <Fragment>
      {[...Array(12)].map((x,i) => <Grid key={i}>{cols(i+1)}</Grid>)}
    </Fragment>
  ))
  .add('size on row', () => (
    <Fragment>
      <Grid rest={6}>
        <Grid.Column><BoxStyle>6 columns</BoxStyle></Grid.Column>
      </Grid>
      <Grid md={6} rest={3}>
        <Grid.Column><BoxStyle>3 columns / 6 columns on medium</BoxStyle></Grid.Column>
        <Grid.Column><BoxStyle>3 columns / 6 columns on medium</BoxStyle></Grid.Column>
      </Grid>
      <Grid rest={2}>
        <Grid.Column><BoxStyle>2 columns</BoxStyle></Grid.Column>
        <Grid.Column><BoxStyle>2 columns</BoxStyle></Grid.Column>
        <Grid.Column><BoxStyle>2 columns</BoxStyle></Grid.Column>
        <Grid.Column><BoxStyle>2 columns</BoxStyle></Grid.Column>
      </Grid>
      <Grid rest={4}>
        <Grid.Column><BoxStyle>4 columns</BoxStyle></Grid.Column>
        <Grid.Column><BoxStyle>4 columns</BoxStyle></Grid.Column>
        <Grid.Column><BoxStyle>4 columns</BoxStyle></Grid.Column>
        <Grid.Column><BoxStyle>4 columns (next row)</BoxStyle></Grid.Column>
      </Grid>
    </Fragment>
  ))
  .add('nesting', () => (
    <Grid>
      <Grid.Column rest={6}><BoxStyle>6 columns</BoxStyle></Grid.Column>
      <Grid.Column rest={6}>
        <Grid>
          <Grid.Column rest={4}><BoxStyle>4 columns</BoxStyle></Grid.Column>
          <Grid.Column rest={8}>
            <Grid>
              <Grid.Column rest={6}><BoxStyle>6 columns</BoxStyle></Grid.Column>
              <Grid.Column rest={6}><BoxStyle>6 columns</BoxStyle></Grid.Column>
              <Grid.Column rest={4}><BoxStyle>4 columns</BoxStyle></Grid.Column>
              <Grid.Column rest={4}><BoxStyle>4 columns</BoxStyle></Grid.Column>
              <Grid.Column rest={4}><BoxStyle>4 columns</BoxStyle></Grid.Column>
            </Grid>
          </Grid.Column>
        </Grid>
      </Grid.Column>
    </Grid>
  ))
  .add('responsive', () => (
    <Fragment>
      <Grid equal>
        <Grid.Column sm={3} rest={6}><BoxStyle>3sm / 6rest</BoxStyle></Grid.Column>
        <Grid.Column sm={3} rest={6}><BoxStyle>3sm / 6rest</BoxStyle></Grid.Column>
      </Grid>
      <Grid equal>
        <Grid.Column sm={2} md={3} lg={5} rest={4}><BoxStyle>2sm / 3md / 5lg / 4rest</BoxStyle></Grid.Column>
        <Grid.Column sm={8} md={6} lg={5} rest={4}><BoxStyle>8sm / 6md / 5lg / 4rest</BoxStyle></Grid.Column>
        <Grid.Column sm={2} md={3} lg={2} rest={4}><BoxStyle>2sm / 3md / 2lg / 4rest</BoxStyle></Grid.Column>
      </Grid>
    </Fragment>
  ))
  .add('spacing', () => (
    <Fragment>
      <Grid spacing="empty">{cols(4)}</Grid>
      <Grid spacing="medium">{cols(4)}</Grid>
      <Grid spacing="large">{cols(4)}</Grid>
      <Grid>{cols(4)}</Grid>
    </Fragment>
  ))
  .add('equal height', () => (
    <Grid equal>
      <Grid.Column><BoxStyle>one line</BoxStyle></Grid.Column>
      <Grid.Column><BoxStyle>one line<br/>second line</BoxStyle></Grid.Column>
      <Grid.Column><BoxStyle>alot<br/>of<br/>lines<br/>...<br/>...<br/>...</BoxStyle></Grid.Column>
    </Grid>
  ))