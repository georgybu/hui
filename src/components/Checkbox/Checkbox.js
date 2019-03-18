import React, { Component, createRef, findDom } from 'react';
import PropTypes from 'prop-types';
import LabelWithStyle from './Checkbox.style';

function noop() {}

class Checkbox extends Component {
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

  componentDidMount() {
    const {
      indeterminate
    } = this.props;

    this.setIndeterminate(indeterminate);
  }

  setIndeterminate(val) {
    if (this.input) {
      this.input.indeterminate = !!val;
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
      className,
      style,
      id,
      readOnly,
      autoFocus,
      disabled,
      onChange,
      onFocus,
      onBlur,
      value,
      onClick,
      indeterminate,
      children,
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
      >
        <input
          name={name}
          id={id}
          type="checkbox"
          readOnly={readOnly}
          disabled={disabled}
          onFocus={onFocus}
          onClick={onClick}
          onBlur={onBlur}
          value={value}
          checked={!!checked}
          onChange={this.handleChange}
          ref={this.saveInput}
          {...globalProps}
        />
        {children !== undefined && <span>{children}</span>}
      </LabelWithStyle>
    )
  }
}

Checkbox.propTypes = {
  autoFocus: PropTypes.bool,
  checked: PropTypes.bool,
  indeterminate: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func
}

Checkbox.defaultProps = {
  autoFocus: false,
  disabled: false,
  onChange: noop
}

export default Checkbox;
