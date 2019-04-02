import React, { Component } from 'react'
import DivWithStyle from './Story.style';
import jsxToString from 'jsx-to-string';
import Header from './Header';
import Group from './Group';
import PropsTable from './PropsTable';
import Icon from '../../../src/components/Icon';


class Story extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openCode: false
    }
  }

  handleCodeClick = () => {
    const {
      openCode
    } = this.state;

    this.setState(state => ({
      openCode: !state.openCode
    }))
  }

  render() {
    const {
      children,
      title,
      info,
      code
    } = this.props;

    const {
      openCode
    } = this.state;

    return (
      <DivWithStyle>
        <div className="example">
          {children}
        </div>

        <div className="meta">
          <div className="title">
            {title}
          </div>
          <div className="info">
            {info}
          </div>
          <div className="actions">
            <span tabIndex="0" onClick={this.handleCodeClick} title={openCode ? 'הסתר קוד' : 'הצג קוד'}>
              <Icon name="code" size="large" />
              <span>
                {openCode ? 'הסתר קוד' : 'הצג קוד'}
              </span>
            </span>
          </div>
        </div>
        <div className="code" style={{display: openCode ? 'block' : 'none'}}>
          <pre>
            <code>
              {jsxToString(<div>{code || children}</div>)}
            </code>
          </pre>
        </div>
      </DivWithStyle>
    )
  }
}

Story.Header = Header;
Story.Group = Group;
Story.PropsTable = PropsTable;

export default Story;
