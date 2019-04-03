import React, { Component, Fragment } from 'react';
import { createPortal, findDOMNode } from 'react-dom';
import Overlay from '../Overlay';
import PropTypes from 'prop-types';
import ModalWrap from './ModalWrap';
import ModalHead from './ModalHead';
import ModalBody from './ModalBody';
import ModalFoot from './ModalFoot';
import ModalContent from './ModalContent';
import { keyCode, contains, isInteger } from '../../utils';


function noop() {}
let uuid = 0;
const sentinelStyle = { width: 0, height: 0, overflow: 'hidden' };

class Modal extends Component {
  constructor(props) {
    super(props);

    this.titleId = null;
    this.contentId = null;
    this._container = null;
    this.lastOutsideFocusedNode = null;
  }

  componentWillMount() {
    this.createContainer();

    uuid++;
    this.titleId = `modalTitle${uuid}`;
    this.contentId = `modalBody${uuid}`;
  }

  componentWillUnmount() {
    this.removeContainer();
    if (this.props.visible) {
      document.body.style.overflow = '';
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.visible) {
      if (!prevProps.visible) {
        this.tryFocus();
        document.body.style.overflow = 'hidden';
      } else {
        this.lastOutsideFocusedNode.focus();
      }
    } else {
      if (prevProps.visible) {
        document.body.style.overflow = '';
        this.lastOutsideFocusedNode.focus();
      }
    }
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

  closeModal() {
    const {
      handleCancel
    } = this.props;

    if (handleCancel) {
      handleCancel();
    }
  }

  wrapOnKeyDown = (e) => {
    const {
      keyboard,
      visible
    } = this.props;

    if (keyboard && e.keyCode === keyCode.ESC) {
      e.stopPropagation();
      this.closeModal();
      return;
    }

    if (visible) {
      if (e.keyCode === keyCode.TAB) {
        const activeElement = document.activeElement;

        if (e.shiftKey) {
          if (activeElement === this.sentinelStart) {
            this.sentinelEnd.focus();
          }
        } else if (activeElement === this.sentinelEnd) {
          this.sentinelStart.focus();
        }
      }
    }
  }

  tryFocus() {
    if (!this.wrap) {
      return;
    }

    const wrap = findDOMNode(this.wrap);
    if (this.wrap && !contains(wrap, document.activeElement)) {
      this.lastOutsideFocusedNode = document.activeElement;
      wrap.focus();
    }
  }

  saveRef = (name) => (node) => {
    (this)[name] = node;
  }

  getContentWidth() {
    const {
      width
    } = this.props;

    return (isInteger(width)) ? `${width}px` : width;
  }

  renderModal() {
    const {
      id,
      children,
      title,
      footer,
      visible,
      handleCancel,
      wrapClosable,
      showClosable,
      width
    } = this.props;

    const titleId = (title) ? this.titleId : null;
    const contentWidth = this.getContentWidth();


    return (visible) ?
      (
        <Fragment>
          <Overlay
            fullscreen
          />
          <ModalWrap
            id={id}
            titleId={titleId}
            contentId={this.contentId}
            wrapClosable={wrapClosable}
            ref={this.saveRef('wrap')}
            onKeyDown={this.wrapOnKeyDown}
            onClick={handleCancel}
          >
            <ModalContent width={contentWidth}>
              <div tabIndex={0} ref={this.saveRef('sentinelStart')} style={sentinelStyle}>sentinelStart</div>
              <ModalHead handleCancel={handleCancel} titleId={this.titleId} showClosable={showClosable}>
                {title}
              </ModalHead>
              <ModalBody contentId={this.contentId}>
                {children}
              </ModalBody>
              <ModalFoot>
                {footer}
              </ModalFoot>
              <div tabIndex={0} ref={this.saveRef('sentinelEnd')} style={sentinelStyle}>sentinelEnd</div>
            </ModalContent>
          </ModalWrap>
        </Fragment>
      )
      : null;
  }

  render() {
    if (this._container) {
      return (
        createPortal(this.renderModal(), this._container)
      )
    }

    return null;
  }
}


Modal.propTypes = {
  /**
   * id of modal. used for accessibility
   */
  id: PropTypes.string,

  /**
   * modal title
   */
  title: PropTypes.string,

  /**
   * footer content. will usualy hold action button
   */
  footer: PropTypes.node,

  /**
   * whether the modal dialog is visible or not
   */
  visible: PropTypes.bool,

  /**
   * specify a function that will be called when a user clicks mask, close X button on top left or Cancel button
   */
  handleCancel: PropTypes.func,

  /**
   * whether to close the modal dialog when the mask (area outside the modal) is clicked
   */
  wrapClosable: PropTypes.bool,

  /**
   * whether support press esc to close
   */
  keyboard: PropTypes.bool,

  /**
   * whether to show close X button on top left
   */
  showClosable: PropTypes.bool,

  /**
   * modal width
   */
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

Modal.defaultProps = {
  title: false,
  handleCancel: noop,
  wrapClosable: true,
  keyboard: true,
  showClosable: true,
  width: '520px'
}


export default Modal;
