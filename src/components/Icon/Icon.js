import React, { Component } from 'react';
import PropTypes from 'prop-types';
import WithStyle from './Icon.style';


const getSvgData = (str) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(str, 'text/html');
  const svg = doc.querySelector('svg');
  const viewBox = svg.getAttribute('viewBox');
  const viewBoxArray = viewBox.split(/\s+|,/);
  const width = viewBoxArray[2];
  const height = viewBoxArray[3];
  const content = svg.innerHTML;

  return {
    width,
    height,
    content
  }
}

class Icon extends Component {
  constructor(props) {
    super(props);

    this.url = `http://www.harel-net.co.il/files/hsg/images/icons/${props.name}.svg`;

    this.state = {
      isLoaded: false,
      content: null
    }
  }

  isImage() {
    const {
      type
    } = this.props;

    return (type === 'img' || type === 'image');
  }

  componentDidMount() {
    if (this.isImage()) {
      this.setState({
        isLoaded: true
      })
    } else {
      fetch(this.url)
        .then(result => result.text())
        .then(
          result => {
            this.setState({
              isLoaded: true,
              content: result
            })
          }
        )
    }
  }

  renderImage() {
    return (
      <WithStyle {...this.props}>
        <img src={this.url} role="presentation" />
      </WithStyle>
    );
  }

  renderSvg() {
    let data;

    const {
      isLoaded,
      content
    } = this.state;

    if (isLoaded) {
      data = getSvgData(content);

      return (
        <WithStyle {...this.props}>
          <svg viewBox={`0 0 ${data.width} ${data.height}`} dangerouslySetInnerHTML={{ __html: data.content}} role="presentation" />
        </WithStyle>
      )
    } else {
      return null;
    }
  }

  render() {
    if (this.isImage()) {
      return this.renderImage();
    } else {
      return this.renderSvg();
    }
  }
}

Icon.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string
}


export default Icon;
