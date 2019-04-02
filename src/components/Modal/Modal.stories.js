import React, { Fragment, Component } from 'react';
import { storiesOf } from '@storybook/react';
import { Modal, Button } from '../../index';


class ModalExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false
    }
  }

  showModal = () => {
    this.setState({
      visible: true
    })
  }

  hideModal = () => {
    this.setState({
      visible: false
    })
  }

  render() {
    const {
      visible
    } = this.state;

    return (
      <Fragment>
        <Button onClick={this.showModal}>open modal</Button>
        <p>svadasd fasdf asdf asdf asdf asdf </p><p>ghnfg n fgn fghn dgn dghn </p><p>zqas qs xqwd cqwdc ergb rthnty</p><p>svadasd fasdf asdf asdf asdf asdf </p><p>ghnfg n fgn fghn dgn dghn </p><p>zqas qs xqwd cqwdc ergb rthnty</p><p>svadasd fasdf asdf asdf asdf asdf </p><p>ghnfg n fgn fghn dgn dghn </p><p>zqas qs xqwd cqwdc ergb rthnty</p><p>svadasd fasdf asdf asdf asdf asdf </p><p>ghnfg n fgn fghn dgn dghn </p>
        <p>svadasd fasdf asdf asdf asdf asdf </p><p>ghnfg n fgn fghn dgn dghn </p><p>zqas qs xqwd cqwdc ergb rthnty</p><p>svadasd fasdf asdf asdf asdf asdf </p><p>ghnfg n fgn fghn dgn dghn </p><p>zqas qs xqwd cqwdc ergb rthnty</p><p>svadasd fasdf asdf asdf asdf asdf </p><p>ghnfg n fgn fghn dgn dghn </p><p>zqas qs xqwd cqwdc ergb rthnty</p><p>svadasd fasdf asdf asdf asdf asdf </p><p>ghnfg n fgn fghn dgn dghn </p>
        <p>svadasd fasdf asdf asdf asdf asdf </p><p>ghnfg n fgn fghn dgn dghn </p><p>zqas qs xqwd cqwdc ergb rthnty</p><p>svadasd fasdf asdf asdf asdf asdf </p><p>ghnfg n fgn fghn dgn dghn </p><p>zqas qs xqwd cqwdc ergb rthnty</p><p>svadasd fasdf asdf asdf asdf asdf </p><p>ghnfg n fgn fghn dgn dghn </p><p>zqas qs xqwd cqwdc ergb rthnty</p><p>svadasd fasdf asdf asdf asdf asdf </p><p>ghnfg n fgn fghn dgn dghn </p>
        <p>svadasd fasdf asdf asdf asdf asdf </p><p>ghnfg n fgn fghn dgn dghn </p><p>zqas qs xqwd cqwdc ergb rthnty</p><p>svadasd fasdf asdf asdf asdf asdf </p><p>ghnfg n fgn fghn dgn dghn </p><p>zqas qs xqwd cqwdc ergb rthnty</p><p>svadasd fasdf asdf asdf asdf asdf </p><p>ghnfg n fgn fghn dgn dghn </p><p>zqas qs xqwd cqwdc ergb rthnty</p><p>svadasd fasdf asdf asdf asdf asdf </p><p>ghnfg n fgn fghn dgn dghn </p>
        <p>svadasd fasdf asdf asdf asdf asdf </p><p>ghnfg n fgn fghn dgn dghn </p><p>zqas qs xqwd cqwdc ergb rthnty</p><p>svadasd fasdf asdf asdf asdf asdf </p><p>ghnfg n fgn fghn dgn dghn </p><p>zqas qs xqwd cqwdc ergb rthnty</p><p>svadasd fasdf asdf asdf asdf asdf </p><p>ghnfg n fgn fghn dgn dghn </p><p>zqas qs xqwd cqwdc ergb rthnty</p><p>svadasd fasdf asdf asdf asdf asdf </p><p>ghnfg n fgn fghn dgn dghn </p>
        <Modal
          title="כותרת חלון מודל"
          visible={visible}
          handleCancel={this.hideModal}
          footer={
            <Fragment>
              <Button onClick={this.hideModal}>בטל</Button>
              <Button primary>עדכן</Button>
            </Fragment>
          }
        >
          <p>תוכן חלון מודל</p>
          <p>תוכן חלון מודל</p>
          <p>תוכן חלון מודל</p>
          <p>תוכן חלון מודל</p>
          <p>1</p><p>2</p><p>3</p><p>4</p><p>5</p>
          <p>1</p><p>2</p><p>3</p><p>4</p><p>5</p>
          <p>1</p><p>2</p><p>3</p><p>4</p><p>5</p>
          <p>1</p><p>2</p><p>3</p><p>4</p><p>5</p>
          <p>1</p><p>2</p><p>3</p><p>4</p><p>5</p>
          <p>1</p><p>2</p><p>3</p><p>4</p><p>5</p>
          <p>1</p><p>2</p><p>3</p><p>4</p><p>5</p>
          <p>1</p><p>2</p><p>3</p><p>4</p><p>5</p>
          <p>1</p><p>2</p><p>3</p><p>4</p><p>5</p>
          <p>1</p><p>2</p><p>3</p><p>4</p><p>5</p>
          <p>1</p><p>2</p><p>3</p><p>4</p><p>5</p>
          <p>1</p><p>2</p><p>3</p><p>4</p><p>5</p>
          <p>1</p><p>2</p><p>3</p><p>4</p><p>5</p>
        </Modal>
      </Fragment>
    )
  }
}



storiesOf('Modal', module)
  .add('default', () => (
    <ModalExample />
  ))
