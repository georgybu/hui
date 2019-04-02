import React from 'react'
import SpanWithStyle from './SelectIcon.style';
import Loader from '../Loader';
import Icon from '../Icon';

function selectIcon({type}) {

  const icon = (type === 'loading')
    ? <Loader active size="small" />
    : <Icon name="angle-down" size="large" />


  return (
    <SpanWithStyle>
      {icon}
    </SpanWithStyle>

  )
}

export default selectIcon;
