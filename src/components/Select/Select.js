import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Option from './Option';
import DivWithStyle from './Select.style';
import SelectIcon from './SelectIcon';
import SelectPlaceholder from './SelectPlaceholder';
import SelectValue from './SelectValue';


class Select extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      selectedValue: null
    }
  }


  render() {
    const {
      placeholder,
      loading,
      disabled
    } = this.props;

    const {
      open,
      selectedValue
    } = this.state;

    const iconType = (loading) ? 'loading' : 'arrow';

    return (
      <DivWithStyle
        tabIndex="0"
        role="combobox"
        aria-autocomplete="list"
        aria-haspopup="true"
        aria-controls=""
        aria-expanded="false"
        disabled={disabled}
      >
        <div>
          <SelectValue title={selectedValue} />
          <SelectPlaceholder title={placeholder} visible={!selectedValue} />
        </div>
        <SelectIcon type={iconType} rotate={open} />
      </DivWithStyle>
    )
  }
}

Select.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.any,
  defaultValue: PropTypes.any,
  label: PropTypes.node,
  disabled: PropTypes.bool,
  loading: PropTypes.bool
}

Select.defaultProps = {
  disabled: false,
  loading: false
}

Select.Option = Option;

export default Select;
