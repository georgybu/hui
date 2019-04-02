import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SpanWithStyle from './Icon.style';
import { isObject } from '../../utils';

// TODO: change to axios ?!
// TODO: handle failure
// TODO: add fallback and image not loaded

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

    this.url = `https://new.harel-net.co.il/files/hsg/images/icons/${props.name}.svg`;

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
    return <img src={this.url} role="presentation" />;
  }

  renderSvg() {
    let data;

    const {
      isLoaded,
      content
    } = this.state;

    let image = null;

    if (isLoaded) {
      data = getSvgData(content);
      image = <svg
          viewBox={`0 0 ${data.width} ${data.height}`}
          dangerouslySetInnerHTML={{ __html: data.content}}
          role="presentation"
          aria-hidden="true"
        />;
    }

    return image;
  }

  render() {
    const {
      size
    } = this.props;

    const image = this.isImage() ? this.renderImage() : this.renderSvg();

    return (
      <SpanWithStyle size={size}>
        {image}
      </SpanWithStyle>
    )
  }
}

Icon.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string
}

Icon.defaultProps = {
  size: 'medium'
}


export default Icon;
