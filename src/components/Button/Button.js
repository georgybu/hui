import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isChildrenNil } from '../../utils';
import WithStyle from './Button.style';


const getButtonAriaRole = (ElementType, role) => {
  if (role != null) return role;
  if (ElementType !== 'button') return 'button';
};

const getElementType = (href) => href ? 'a' : 'button';

const getTabIndex = (disabled, tabIndex) => {
  if (tabIndex != null) return tabIndex;
  if (disabled) return -1;
}


const Button = (props) => {
  const {
    disabled, 
    children, 
    content, 
    href, 
    tabIndex, 
    role
  } = props;

  const elementType = getElementType(href);
  const elementRole = getButtonAriaRole(elementType, role);
  const elementTabIndex = getTabIndex(disabled, tabIndex);
  const hasChildren = !isChildrenNil(children);
  const elementProps = Object.assign({}, props, {
    as: elementType,
    disabled: (disabled && elementType === 'button'),
    tabIndex: elementTabIndex,
    role: elementRole
  })

  return (
    <WithStyle {...elementProps}>
      {(hasChildren) ? children : content}
    </WithStyle>
  )
}


Button.propTypes = {
  primary: PropTypes.bool,
  danger: PropTypes.bool,
  active: PropTypes.bool,
  className: PropTypes.string,
  content: PropTypes.string,
  disabled: PropTypes.bool,
  fluid: PropTypes.bool,
  onClick: PropTypes.func,
  loading: PropTypes.bool,
  role: PropTypes.string,
  tabIndex: PropTypes.number,
  size: PropTypes.oneOf(['small', 'medium', 'large'])
}


export default Button;