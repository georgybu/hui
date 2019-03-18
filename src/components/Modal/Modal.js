import React, { Component, Fragment } from 'react';
import { createPortal } from 'react-dom';
import Overlay from '../Overlay';
import PropTypes from 'prop-types';


let uuid = 0;
let openCount = 0;


class Modal extends Component {
  constructor(props) {
    super(props);

    this._container = null;
  }

  componentWillMount() {
    this.createContainer();
  }

  componentWillUnmount() {
    this.removeContainer();
  }

  createContainer() {
    this._container = document.createElement('div');
    document.body.appendChild(this._container);
  }

  removeContainer() {
    if (this._container) {
      this._container.parentNode.removeChild(this._container);
    }
  }

  renderModal() {
    const {
      children
    } = this.props;

    return (
      <Fragment>
        <Overlay
          fullscreen
        />
        <div>
          {children}

        </div>
      </Fragment>
    )
  }

  render() {
console.log('this._container', this._container);
    if (this._container) {
      return (
        createPortal(this.renderModal(), this._container)
      )
    }

    return null;
  }
}


export default Modal;
