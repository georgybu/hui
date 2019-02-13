import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import WithStyle from './Input.style';
import Group from './Group';


class Input extends Component {
  constructor(props) {
    super(props);

    this.input = createRef();

    const value = typeof props.value === 'undefined' ? props.defaultValue : props.value;
    this.state = {
      value
    }
  }

  setValue = (value, e) => {
    if (!('value' in this.props)) {
      this.setState({value});
    }

    const {
      onChange
    } = this.props;

    if (onChange) {
      let event = e;

      //TODO: click clear icon

      onChange(event);
    }
  }

  handleReset = (e) => {
    this.setValue('', e);
  }

  handleChange = (e) => {
    this.setValue(e.target.value, e);
  }

  handleKeyDown = (e) => {
    const {
      onPressEnter,
      onKeyDown
    } = this.props;

    if (e.keyCode === 13 && onPressEnter) {
      onPressEnter(e);
    }

    if (onKeyDown) {
      onKeyDown(e);
    }
  }

  focus() {
    this.input.focus();
  }

  blur() {
    this.input.blur();
  }

  select() {
    this.input.select();
  }


  render() {
    const {
      disabled,
      placeholder
    } = this.props;

    return (
      <WithStyle
        disabled={disabled}
        placeholder={placeholder}
        onChange={this.handleChange}
        onKeyDown={this.handleKeyDown}
        ref={this.input}
      />
    )
  }
}

Input.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string,
  maxLength: PropTypes.number,
  disabled: PropTypes.bool,
  value: PropTypes.any,
  defaultValue: PropTypes.any,
  className: PropTypes.string,
  onPressEnter: PropTypes.func,
  onKeyDown: PropTypes.func,
  onKeyUp: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func
}

Input.defaultProps = {
  type: 'text',
  disabled: false
}

Input.Group = Group;

export default Input;
