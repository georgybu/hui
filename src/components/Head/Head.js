import React from 'react';
import PropTypes from 'prop-types';
import WithStyle from './Head.style';
import { customPropTypes, isChildrenNil } from '../../utils';
import Title from './Title';
import Subtitle from './Subtitle';
import Action from './Action';


const Head = props => {
  const {
    title,
    subtitle,
    pdfUrl,
    children
  } = props;

  const content = (!isChildrenNil(children)) ? children : title;

  return (
    <WithStyle>
      <Title content={content} />
      <Subtitle content={subtitle} />
      <Action href={pdfUrl} content="PDF" />
    </WithStyle>
  )
}

Head.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  pdfUrl: customPropTypes.url
}

export default Head;
