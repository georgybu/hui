import React from 'react';
import WithStyle from './Top.style';
import { customPropTypes } from '../../utils';
import Logo from './Logo';


const Top = props => {
  const {
    url,
    content,
    showLogo
  } = props;

  return (
    <WithStyle>
      <div className="u-wrap">
        <Logo showLogo={showLogo} href={url}>{content}</Logo>
      </div>
    </WithStyle>
  )
}

Top.propTypes = {
  url: customPropTypes.url
}

Top.defaultProps = {
  showLogo: true,
  url: 'https://www.harel-group.co.il',
  content: 'מעבר לדף ראשי'
}

export default Top;
