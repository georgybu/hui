import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import Inject from './Inject';

class HsgProvider extends Component {
  render() {
    const {
      children,
      reset,
      injectGlobal
    } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <React.Fragment>
          {(reset || injectGlobal) && <Inject reset={reset} injectGlobal={injectGlobal} />}
          {children}
        </React.Fragment>
      </ThemeProvider>
    )
  }
}

HsgProvider.prototypes = {
  reset: PropTypes.bool,
  injectGlobal: PropTypes.bool
}

HsgProvider.defaultProps = {
  reset: true,
  injectGlobal: true
}

export default HsgProvider;