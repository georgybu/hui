import React, { Component, Fragment } from 'react';
import TextareaWithStyle from './Textarea.style';
import { isChildrenNil, calculateNodeHeight } from '../../utils';
import PropTypes from 'prop-types';
import Label from '../Label';
import { omit } from '../../utils';


function fixControlledValue(value) {
  if (typeof value === 'undefined' || value === null) {
    return '';
  }
  return value;
}


class Textarea extends Component {
  constructor(props) {
    super(props);

    this.textAreaRef = null;

    const value = !isChildrenNil(props.children) ? props.children : props.value;

    this.state = {
      textareaStyles: {},
      value
    }
  }

  componentDidMount() {
    this.resizeTextArea();
  }

  saveTextAreaRef = (textarea) => {
    this.textAreaRef = textarea;
  }

  focus() {
    this.textAreaRef.focus();
  }

  blur() {
    this.textAreaRef.blur();
  }

  resizeTextArea = () => {
    const {
      autosize
    } = this.props;

    if (!autosize || !this.textAreaRef) {
      return;
    }

    const {
      minRows,
      maxRows
    } = autosize;

    const textareaStyles = calculateNodeHeight(this.textAreaRef, minRows, maxRows);
    this.setState({textareaStyles});
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

  handleTextareaChange = (e) => {
    const {
      onChange
    } = this.props;

    if (!('value' in this.props)) {
      this.setState({value: e.target.value});
      this.resizeTextArea();
    }

    if (onChange) {
      onChange(e);
    }
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

  render() {
    const {
      disabled,
      placeholder,
      id,
      required,
      ...rest
    } = this.props;

    const label = this.renderLabel();
    const restProps = omit(rest, ['defaultValue']);

    return (
      <Fragment>
        {label}
        <TextareaWithStyle
          id={id}
          aria-required={required}
          value={fixControlledValue(this.state.value)}
          disabled={disabled}
          placeholder={placeholder}
          onKeyDown={this.handleKeyDown}
          onChange={this.handleTextareaChange}
          ref={this.saveTextAreaRef}
          style={this.state.textareaStyles}
          {...restProps}
        />
      </Fragment>
    )
  }
}


Textarea.propTypes = {
  value: PropTypes.string,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string
}


export default Textarea;
