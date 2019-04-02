import React, { Component, createRef, Fragment } from 'react';
import PropTypes from 'prop-types';
import InputWithStyle from './Input.style';
import Group from './Group';
import Wrap from './Wrap';
import Addon from './Addon';
import Affix from './Affix';
import Info from './Info';
import Icon from '../Icon';
import Label from '../Label';
import { omit } from '../../utils';


function fixControlledValue(value) {
  if (typeof value === 'undefined' || value === null) {
    return '';
  }
  return value;
}


class Input extends Component {
  constructor(props) {
    super(props);

    this.input = createRef();

    let value = typeof props.value === 'undefined' ? props.defaultValue : props.value;
    if (typeof value === 'undefined') {
      value = '';
    }

    this.state = {
      value
    }
  }

  saveInput = (node) => {
    this.input = node;
  }

  setValue = (value, e) => {
    this.setState({value});

    const {
      onChange
    } = this.props;

    if (onChange) {
      let event = e;

      if (e.type === 'click') {
        event = Object.create(e);
        event.target = this.input;
        event.currentTarget = this.input;
        this.input.value = '';
        onchange(event);
        return;
      }

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

  renderBeforeAfter(children) {
    const {
      addonBefore,
      addonAfter
    } = this.props;

    const beforeNode = (addonBefore) ? <Addon position="before" transparent={true}>{addonBefore}</Addon> : null;
    const afterNode = (addonAfter) ? <Addon position="after" transparent={true}>{addonAfter}</Addon> : null;

    return (
      <Group>
        {beforeNode}
        {children}
        {afterNode}
      </Group>
    );
  }

  renderClearIcon() {
    const {
      allowClear
    } = this.props;

    const {
      value
    } = this.state;

    if (!allowClear || value === undefined || value === null || value === '') {
      return null;
    }

    return (
      <Affix type="suffix" onClick={this.handleReset}><Icon name="times-circle" role="button" /></Affix>
    )
  }

  renderPrefixSuffix(children) {
    const {
      prefix,
      suffix
    } = this.props;

    let suffixComponent = null;
    const clearIcon = this.renderClearIcon();
    const prefixComponent = (prefix) ? <Affix type="prefix">{prefix}</Affix> : null;

    if (clearIcon) {
      suffixComponent = clearIcon;
    } else if (suffix) {
      suffixComponent = <Affix type="suffix">{suffix}</Affix>
    }

    return (
      <Wrap>
        {prefixComponent}
        {children}
        {suffixComponent}
      </Wrap>
    )
  }

  renderInfo() {
    const {
      explain,
      info,
      invalid
    } = this.props;

    if (!explain && !info) {
      return null;
    }

    const explainComponent = (explain) ? <Info danger invalid={invalid}>{explain}</Info> : null;
    const infoComponent = (info) ? <Info>{info}</Info> : null;

    return (
      <Fragment>
        {explainComponent}
        {infoComponent}
      </Fragment>
    )
  }

  renderLabel() {
    const {
      id,
      required,
      label
    } = this.props;

    if (label) {
      return <Label forName={id} required={required}>{label}</Label>;
    }

    return null;
  }

  renderInput() {
    const {
      disabled,
      placeholder,
      invalid,
      prefix,
      suffix,
      maxLength,
      value,
      id,
      required,
      ...rest
    } = this.props;

    const restProps = omit(rest, ['defaultValue']);

    return (
      <InputWithStyle
        {...restProps}
        id={id}
        value={fixControlledValue(this.state.value)}
        maxLength={maxLength}
        hasPrefix={!!prefix}
        hasSuffix={!!suffix}
        invalid={!!invalid}
        disabled={disabled}
        aria-required={required}
        placeholder={placeholder}
        onChange={this.handleChange}
        onKeyDown={this.handleKeyDown}
        ref={this.saveInput}
      />
    );
  }

  render() {
    const input = this.renderInput();
    const label = this.renderLabel();
    const info = this.renderInfo();
    const addonsAffixsAndInput = this.renderBeforeAfter(this.renderPrefixSuffix(input));

    return (
      <Fragment>
        {label}
        {addonsAffixsAndInput}
        {info}
      </Fragment>
    );
  }
}

Input.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  onKeyUp: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  id: PropTypes.string,
  maxLength: PropTypes.number,
  disabled: PropTypes.bool,
  value: PropTypes.any,
  defaultValue: PropTypes.any,
  onPressEnter: PropTypes.func,
  onKeyDown: PropTypes.func,
  addonBefore: PropTypes.node,
  addonAfter: PropTypes.node,
  prefix: PropTypes.element,
  suffix: PropTypes.element,
  explain: PropTypes.string,
  info: PropTypes.string,
  label: PropTypes.node,
  required: PropTypes.bool
}

Input.defaultProps = {
  type: 'text',
  disabled: false
}

Input.Group = Group;

export default Input;
