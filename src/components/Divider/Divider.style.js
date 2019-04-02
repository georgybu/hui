import styled from 'styled-components';

const variables = {
  color: {
    background: '#e8e8e8'
  }
}


const Style = styled.div`
  padding: 0;
  color: rgba(0,0,0,0.65);
  font-size: 1em;
  line-height: 1.5;
  list-style: none;
  background: ${props => props.dashed ? null : variables.color.background};
  border-top: ${props => props.dashed ? `1px dashed ${variables.color.background}` : null};
  display: ${props => (props.vertical) ? 'inline-block' : 'block'};
  clear: both;
  width: ${props => (props.vertical) ? '1px' : '100%'};
  min-width: ${props => (props.vertical) ? null : '100%'};
  height: ${props => (props.vertical) ? '0.8em' : '1px'};
  margin: ${props => (props.vertical) ? `0 ${props.theme.spacing.medium}` : `${props.theme.spacing.large} 0`};
  position: relative;
  vertical-align: middle;

  &:before {
    width: ${props =>
      props.orientation === 'right' && '5%'
      || (props.orientation === 'center' || !props.orientation) && '50%'
      || props.orientation === 'left' && '95%'
    };
  }

  &:after {
    width: ${props =>
      props.orientation === 'right' && '95%'
      || (props.orientation === 'center' || !props.orientation) && '50%'
      || props.orientation === 'left' && '5%'
    };
  }

  ${props => (props.children) && `
    display: table;
    white-space: nowrap;
    text-align: center;
    background: transparent;

    &:before,
    &:after {
      position: relative;
      top: 50%;
      display: table-cell;
      border-top: 1px solid #e8e8e8;
      transform: translateY(50%);
      content: '';
    }

    & > span {
      line-height: 1;
      font-size: 1.1rem;
      font-weight: 300;
      color: rgba(0,0,0,0.85);
      display: inline-block;
      padding: 0 ${props.theme.spacing.large};
    }
  `}
`;

export default Style;
