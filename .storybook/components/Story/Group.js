import React from 'react';
import DivWithStyle from './Group.style';
import Grid from '../../../src/components/Grid'

function Group({children, full}) {

  let right = [];
  let left = [];

  React.Children.forEach(children, function(child, index){
    if (index % 2 === 0) {
      right.push(child);
    } else {
      left.push(child);
    }
  })

  return (
    <DivWithStyle>
      <h2>דוגמאות</h2>
      <Grid md={full ? 12 : 6}>
        <Grid.Column>
          {right}
        </Grid.Column>
        <Grid.Column>
          {left}
        </Grid.Column>
      </Grid>
    </DivWithStyle>
  )
}

export default Group;
