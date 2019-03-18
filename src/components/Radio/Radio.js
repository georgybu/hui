import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import LabelWithStyle from './Radio.style';
import Group from './Group';

function noop() {};

class Radio extends Component {
  constructor(props) {
    super(props);

    this.input = createRef();

    const checked = ('checked' in props) ? props.checked : props.defaultChecked;

    this.state = {
      checked
    }
  }

  componentWillReceiveProps(nextProps) {
    if ('checked' in nextProps) {
      this.setState({
        checked: nextProps.checked
      })
    }
  }

  saveInput = (node) => {
    this.input = node;
  }

  focus() {
    this.input.focus();
  }

  blur() {
    this.input.blur();
  }

  handleChange = (e) => {
    const {
      disabled,
      onChange
    } = this.props;

    if (disabled) {
      return;
    }

    if (!('checked' in this.props)) {
      this.setState({
        checked: e.target.checked
      })
    }

    onChange({
      target: {
        ...this.props,
        checked: e.target.checked,
      },
      stopPropagation() {
        e.stopPropagation();
      },
      preventDefault() {
        e.preventDefault();
      },
      nativeEvent: e.nativeEvent,
    });

  }

  render() {
    const {
      name,
      id,
      disabled,
      className,
      style,
      readOnly,
      onClick,
      onFocus,
      onBlur,
      autoFocus,
      value,
      children,
      type,
      ...rest
    } = this.props;

    const {
      checked
    } = this.state;


    const globalProps = Object.keys(rest).reduce((prev, key) => {
      if (key.substr(0, 5) === 'aria-' || key.substr(0, 5) === 'data-' || key === 'role') {
        prev[key] = rest[key];
      }
      return prev;
    }, {});

    return (
      <LabelWithStyle
        className={className}
        style={style}
        htmlFor={id}
        type={type}
      >
        <input
          name={name}
          id={id}
          type="radio"
          readOnly={readOnly}
          disabled={disabled}
          checked={!!checked}
          onClick={onClick}
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={this.handleChange}
          autoFocus={autoFocus}
          ref={this.saveInput}
          value={value}
          {...globalProps}
        />
        {children !== undefined && <span>{children}</span>}
      </LabelWithStyle>
    )
  }
}


Radio.Group = Group;

Radio.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  readOnly: PropTypes.bool,
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  onClick: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  autoFocus: PropTypes.bool,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
}

Radio.defaultTypes = {
  defaultChecked: false,
  readOnly: false,
  disabled: false,
  checled: false,
  onClick: noop,
  onFocus: noop,
  onBlur: noop,
  onChange: noop,
  autoFocus: false
}

export default Radio;
