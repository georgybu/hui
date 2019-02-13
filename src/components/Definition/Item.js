import React, {Fragment} from 'react';
import { StyleDd, StyleDt } from './Item.style';


const Item = ({item}) => (
  <Fragment>
    <StyleDt width={item.width}>{item.title}</StyleDt>
    <StyleDd width={item.width}>{item.desc}</StyleDd>
  </Fragment>
)

export default Item;