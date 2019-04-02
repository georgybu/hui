import React, {Fragment} from 'react';
import { storiesOf } from '@storybook/react';
import { Grid } from '../../index';
import styled from 'styled-components';
import Story from '../../../.storybook/components/Story';


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
  .add('code', () => (
    <Fragment>
      <Story.Header
        title="גריד"
        info=""
      />
      <Story.Group full>
        <Story
          title="שימוש רגיל"
          info=""
          code={
`<Grid>
    <Grid.Column>1 of 1</Grid.column>
  </Grid>
  <Grid>
    <Grid.Column>1 of 2</Grid.column>
    <Grid.Column>1 of 2</Grid.column>
  </Grid>
  <Grid>
    <Grid.Column>1 of 3</Grid.column>
    <Grid.Column>1 of 3</Grid.column>
    <Grid.Column>1 of 3</Grid.column>
  </Grid>`}
        >
          {[...Array(12)].map((x,i) => <Grid key={i}>{cols(i+1)}</Grid>)}
        </Story>

        <Story
          title="הגדרת רוחב בשורה"
          info="ניתן להגדיר רוחב קבוע של העמודות בתוך השורה בעזרת הוספת המאפיין המתאים"
          code={
``}
        >
          <div>
            <Grid col={6}>
              <Grid.Column><BoxStyle>6 columns</BoxStyle></Grid.Column>
            </Grid>
            <Grid md={6} col={3}>
              <Grid.Column><BoxStyle>3 columns / 6 columns on medium</BoxStyle></Grid.Column>
              <Grid.Column><BoxStyle>3 columns / 6 columns on medium</BoxStyle></Grid.Column>
            </Grid>
            <Grid col={2}>
              <Grid.Column><BoxStyle>2 columns</BoxStyle></Grid.Column>
              <Grid.Column><BoxStyle>2 columns</BoxStyle></Grid.Column>
              <Grid.Column><BoxStyle>2 columns</BoxStyle></Grid.Column>
              <Grid.Column><BoxStyle>2 columns</BoxStyle></Grid.Column>
            </Grid>
            <Grid col={4}>
              <Grid.Column><BoxStyle>4 columns</BoxStyle></Grid.Column>
              <Grid.Column><BoxStyle>4 columns</BoxStyle></Grid.Column>
              <Grid.Column><BoxStyle>4 columns</BoxStyle></Grid.Column>
              <Grid.Column><BoxStyle>4 columns (next row)</BoxStyle></Grid.Column>
            </Grid>
          </div>
        </Story>

        <Story
          title="קינון"
          info="שורת גריד יכולה להיות בתוך עמודה. על ידי כך ניתן לקנן שורה בתוך שורה"
          code={
``}
        >
          <Grid>
            <Grid.Column col={6}><BoxStyle>6 columns</BoxStyle></Grid.Column>
            <Grid.Column col={6}>
              <Grid>
                <Grid.Column col={4}><BoxStyle>4 columns</BoxStyle></Grid.Column>
                <Grid.Column col={8}>
                  <Grid>
                    <Grid.Column col={6}><BoxStyle>6 columns</BoxStyle></Grid.Column>
                    <Grid.Column col={6}><BoxStyle>6 columns</BoxStyle></Grid.Column>
                    <Grid.Column col={4}><BoxStyle>4 columns</BoxStyle></Grid.Column>
                    <Grid.Column col={4}><BoxStyle>4 columns</BoxStyle></Grid.Column>
                    <Grid.Column col={4}><BoxStyle>4 columns</BoxStyle></Grid.Column>
                  </Grid>
                </Grid.Column>
              </Grid>
            </Grid.Column>
          </Grid>
        </Story>

        <Story
          title="רספונסיביות"
          info="הגדרת רוחב העמודה יכולה להיות לגבי כל נקודת שבירה "
          code={
``}
        >
          <div>
            <Grid equalHeight>
              <Grid.Column sm={3} col={6}><BoxStyle>3sm / 6col</BoxStyle></Grid.Column>
              <Grid.Column sm={3} col={6}><BoxStyle>3sm / 6col</BoxStyle></Grid.Column>
            </Grid>
            <Grid equalHeight>
              <Grid.Column sm={2} md={3} lg={5}><BoxStyle>2sm / 3md / 5lg</BoxStyle></Grid.Column>
              <Grid.Column sm={8} md={6} lg={5}><BoxStyle>8sm / 6md / 5lg</BoxStyle></Grid.Column>
              <Grid.Column sm={2} md={3} lg={2}><BoxStyle>2sm / 3md / 2lg</BoxStyle></Grid.Column>
            </Grid>
            <Grid equalHeight>
              <Grid.Column col={3} md={8} lg={6}><BoxStyle>3col / 8md / 6lg</BoxStyle></Grid.Column>
              <Grid.Column col={9} md={4} lg={6}><BoxStyle>9col / 4md / 6lg</BoxStyle></Grid.Column>
            </Grid>
          </div>
        </Story>

        <Story
          title="מרווחים"
          info="הגדרת מרווחים בין עמודות השורה"
          code={
``}
        >
          <div>
            <Grid spacing="large">{cols(4)}</Grid>
            <Grid spacing="medium">{cols(4)}</Grid>
            <Grid spacing="empty">{cols(4)}</Grid>
          </div>
        </Story>

        <Story
          title="השוואת גובה"
          info="במידה והעמודות מכילות תוכן שונה, ניתן להשוות בין גובה העמודות לפי העמודה הגבוהה ביותר"
          code={
``}
        >
          <Grid equalHeight>
            <Grid.Column><BoxStyle>one line</BoxStyle></Grid.Column>
            <Grid.Column><BoxStyle>one line<br/>second line</BoxStyle></Grid.Column>
            <Grid.Column><BoxStyle>alot<br/>of<br/>lines<br/>...<br/>...<br/>...</BoxStyle></Grid.Column>
          </Grid>
        </Story>

      </Story.Group>

      <Story.PropsTable type={Grid} />

      <Story.PropsTable type={Grid.Column} />
    </Fragment>
  ))
