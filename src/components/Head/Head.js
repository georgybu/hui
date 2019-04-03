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
  /**
   * page head title
   */
  title: PropTypes.string.isRequired,

  /**
   * page head subtitle
   */
  subtitle: PropTypes.string,

  /**
   * page head pdf icon url
   */
  pdfUrl: customPropTypes.url
}

export default Head;
