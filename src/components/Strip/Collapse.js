import React, { Component } from 'react';
import WithStyle from './Collapse.style';


class Collapse extends Component {
  constructor(props) {
    super(props);

    this.state = {
      buttonLabel: (props.close) ? 'לחץ לפתיחת הסטריפ' : 'לחץ לסגירת הסטריפ'
    }
  }

  render() {
    const {
      collapse
    } = this.props;

    return (collapse)
      ? <WithStyle 
          type="button" 
          {...this.props}
          aria-label={this.state.buttonLabel}
        />
      : null;
  }
}

export default Collapse;