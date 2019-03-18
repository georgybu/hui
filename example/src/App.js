import React, { Component } from 'react'

// import ExampleComponent from 'hui'
import {
  HsgProvider,
  Container,
  Top,
  Head,
  Grid,
  Panel,
  Background
} from 'hui';

import Shimi from './components/Shimi';

export default class App extends Component {
  render () {
    return (
      <HsgProvider>
        <Background/>
        <Top />
        <Container global>
          <Head>משיכת כספים מקרן השתלמות</Head>
          <Panel type="light">
            <h2 className="u-c2 u-light">רגע לפני שמושכים</h2>
            <p>
              בסרטון, שתועד על ידי אחד הלוחמים ונחשב ל"ראיית הזהב" נגדם, נראה החלק החמור פחות במסכת האלימות שספגו העצורים הכפותים ומכוסי העיניים: הלוחמים נשמעים צוחקים, קוראים קריאות שמחה, מאזינים למוזיקה בחלק האחורי של רכב הזאב הגדול ומדי פעם מכים בסטירות את ראשי שני העצורים, אב ובנו. זעקות הכאב של העצורים נשמעו אף הן לאורך הסרטון.
            </p>

          </Panel>

          {/* <Grid direction="col">
            <Grid.Column>
              <Panel type="dark">
                טופס מסננים
              </Panel>
            </Grid.Column>
            <Grid.Column>
              <Panel type="light">
                  <Shimi></Shimi>
              </Panel>
            </Grid.Column>
          </Grid> */}
        </Container>
      </HsgProvider>
    )
  }
}
