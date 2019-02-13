import React, { Component } from 'react';
import PropTypes from 'prop-types';
import WithStyle from './Strip.style';
import Title from './Title';
import Side from './Side';
import Collapse from './Collapse';
import Body from './Body';
import Subtitle from './Subtitle';
import Content from './Content';
import Head from './Head';
import Headtitle from './Headtitle';


class Strip extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stripClose: !!props.close
    }
  }

  handleButtonClick = () => {
    this.setState(state => ({
      stripClose: !state.stripClose
    }))
  }

  render() {
    const {
      title,
      subtitle,
      header,
      collapse,
      content,
      children,
      success,
      danger,
      info
    } = this.props;

    const {
      stripClose
    } = this.state;

    const type = {success, danger, info};
    const isSpecial = success || danger || info;

    return (
      <WithStyle>
        <Collapse collapse={collapse} close={stripClose} onClick={this.handleButtonClick} />
        
        <Side {...type} isSpecial={isSpecial}>
          <Title isSpecial={isSpecial} title={title} />
          <Subtitle subtitle={subtitle} />
        </Side>

        <Content>
          <Head header={header}>
            <Headtitle>{header}</Headtitle>
          </Head>
          <Body close={stripClose} children={children} content={content} />
        </Content>
      </WithStyle>
    )
  }
}


Strip.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  header: PropTypes.node,
  collapse: PropTypes.bool,
  close: PropTypes.bool,
  content: PropTypes.node
}


export default Strip;