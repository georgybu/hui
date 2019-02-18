import React from 'react';
import WithStyle from './Pager.style';
import PropTypes from 'prop-types';


const Pager = (props) => {
  const {
    active,
    className,
    disabled,
    showTitle,
    onClick,
    onKeyPress,
    page
  } = props;

  const handleClick = e => {
    e.preventDefault();
    onClick(page);
  }

  const handleKeyPress = e => {
    e.preventDefault();
    onKeyPress(e, onClick, page);
  }

  const tabIndex = (!disabled) ? 0 : null;
  const title = (showTitle) ? page : null;

  return (
    <WithStyle
      title={title}
      className={className}
      onClick={onClick}
      onKeyPress={handleKeyPress}
      tabIndex={tabIndex}
      active={active}
      disabled={disabled}
    >
      <a>{page}</a>
    </WithStyle>
  )
}

Pager.defaultProps = {
  active: false,
  disabled: false
}

export default Pager;
