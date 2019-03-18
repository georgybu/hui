import React, { Component } from 'react';
import WithStyle from './Overlay.style';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';

function noop() {}

class Overlay extends Component {
  constructor(props) {
    super(props);

    this.state = {
      position: null
    }
  }

  setPosition(newPosition) {
    const element = findDOMNode(this).parentNode;
    const position = (element.style.position === 'relative') ? 'relative' : '';

    if (newPosition !== position) {
      this.setState({
        position
      });

      element.style.position = newPosition;
    }

  }

  componentDidMount() {
    const { fullscreen } = this.props;
    if (fullscreen) { return; }
    const element = findDOMNode(this).parentNode;
    const position = element.style.position;
    this.setState({ position });
    element.style.position = 'relative';
  }

  componentWillUnmount() {
    const { fullscreen } = this.props;
    if (fullscreen) { return; }
    const element = findDOMNode(this).parentNode;
    this.setState({ position: null });
    element.style.position = this.state.position;
  }

  render() {
    const {
      fullscreen,
      light,
      onClick
    } = this.props;

    return (
      <WithStyle
        fullscreen={fullscreen}
        light={light}
        onClick={onClick}
      />
    )
  }
}

Overlay.propTypes = {
  fullscreen: PropTypes.bool,
  light: PropTypes.bool,
  onClick: PropTypes.func
}

Overlay.defaultProps = {
  fullscreen: true,
  light: false,
  onClick: noop
}

export default Overlay;
