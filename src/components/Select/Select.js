import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    }
  }
}

Select.propTypes = {
  disabled: PropTypes.bool,

}

Select.defaultProps = {
  dataSource: []
}

export default Select;
