import React, { Component } from 'react'

// import ExampleComponent from 'hui'
import {
  HsgProvider,
  Container,
  Top,
  Head,
  Grid,
  Strip,
  Panel,
  Background
} from 'hui';

export default class App extends Component {
  render () {
    return (
      <div>
        <HsgProvider>
          <Background/>
          <Top />
          <Container global>
            <Head>כותרת הדף</Head>
            <Grid direction="col">
              <Grid.Column>
                <Panel type="dark">טופס מסננים</Panel>
              </Grid.Column>
              <Grid.Column>
                <Panel type="light">
                  טבלת תוצאות
                </Panel>
              </Grid.Column>
            </Grid>
          </Container>
        </HsgProvider>
      </div>
    )
  }
}
