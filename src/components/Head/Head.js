import React from 'react';
import PropTypes from 'prop-types';
import WithStyle from './Head.style';
import { customPropTypes, isChildrenNil } from '../../utils';


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
      {content && 
        <h1 className="title">{content}</h1>
      }

      {subtitle && 
        <h2 className="subtitle">{subtitle}</h2>
      }
      
      {pdfUrl &&
        <a href={pdfUrl} className="pdf">PDF</a>
      }
    </WithStyle>
  )
}

Head.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  pdfUrl: customPropTypes.url
}

export default Head;