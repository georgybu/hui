import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DivWithStyle from './Option.style';

class Option extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <DivWithStyle>option</DivWithStyle>;
  }
}

Option.propTypes = {
  disabled: PropTypes.bool,

}

Option.defaultProps = {

}

export default Option;
