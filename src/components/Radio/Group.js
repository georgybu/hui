import React, { Component, cloneElement, Children } from 'react';
import WithStyle from './Group.style';
import PropTypes from 'prop-types';

function noop() {};

function getCheckedValue(children) {
  let value = null;
  let matched = false;
  Children.forEach(children, (radio) => {
    if (radio && radio.props && radio.props.checked) {
      value = radio.props.value;
      matched = true;
    }
  });
  return matched ? { value } : undefined;
}


class Group extends Component {
  constructor(props) {
    super(props);

    const {
      value,
      defaultValue
    } = props;

    const checkedValue = value ? value : defaultValue;

    this.state = {
      value: checkedValue
    }
  }

  static getDerivedStateFromProps(nextProps) {
    if ('value' in nextProps) {
      return {
        value: nextProps.value,
      }
    } else {
      const checkedValue = getCheckedValue(nextProps.children);
      if (checkedValue) {
        return {
          value: checkedValue.value,
        };
      }
    }
    return null;
  }

  onRadioChange = (ev) => {
    const lastValue = this.state.value;
    const onChange = this.props.onChange;
    const { value } = ev.target;

    if (!('value' in this.props)) {
      this.setState({
        value
      })
    }

    if (onChange && value !== lastValue) {
      onChange(ev);
    }
  }

  render() {
    const {
      children,
      vertical,
      name,
      id,
      disabled,
      onChange,
      className,
      style,
      onMouseEnter,
      onMouseLeave
    } = this.props;

    const {
      value
    } = this.state;

    const childrenWithProps = React.Children.map(children, (child, index) => {
      const checked = (value && child.props.value === value);
      return cloneElement(child, {
        name,
        disabled,
        checked,
        id: (id) ? `${id}-${index}` : null,
        onChange: this.onRadioChange
      })}
    );

    return (
      <WithStyle
        vertical={vertical}
        className={className}
        style={style}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {childrenWithProps}
      </WithStyle>
    )
  }
}


Group.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  disabled: PropTypes.bool,
  vertical: PropTypes.bool,
  onChange: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func
}

Group.defaultProps = {
  disabled: false,
  vertical: false,
  onChange: noop,
  onMouseEnter: noop,
  onMouseLeave: noop
}


export default Group;
