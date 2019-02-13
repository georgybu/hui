import React from 'react';
import WithStyle from './Definition.style';
import Item from './Item';

const Definition = ({items, titleWidth}) => (
  <WithStyle>
    {items.map((item, index) => {
      if (titleWidth) item = {...item, width: titleWidth};
      return (
        <Item key={item.id || index} item={item} />
      )
    } )}
  </WithStyle>
)

export default Definition;