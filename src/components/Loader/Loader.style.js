import styled, { keyframes } from 'styled-components';


const variables = {
  border: {
    regular: 'rgba(0,0,0,.1)',
    inverted: 'rgba(255,255,255,.15)'
  },
  size: {
    small: {
      fontSize: '.8em',
      dimensions: '1'
    },
    medium: {
      fontSize: '1em',
      dimensions: '2'
    },
    large: {
      fontSize: '1.2em',
      dimensions: '3'
    },
    xlarge: {
      fontSize: '1.2em',
      dimensions: '3.5'
    },
    xxlarge: {
      fontSize: '1.2em',
      dimensions: '4'
    }
  }
}

const animationLoader = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Style = styled.div`
  display: ${props => (props.inline) ? 'inline-block' : 'block'};
  position: ${props => (props.inline) ? 'relative' : 'absolute'};
  top: ${props => (!props.inline) ? '50%': null};
  left: ${props => (!props.inline) ? '50%': null};
  margin: 0;
  text-align: center;
  z-index: ${props => props.theme.zindex.loader};
  transform: ${props => (!props.inline) ? 'translateX(-50%) translateY(-50%)': null};
  min-width: ${props => variables.size[props.size].dimensions}em;
  min-height: ${props => variables.size[props.size].dimensions}em;
  font-size: ${props => variables.size[props.size].fontSize};
  padding-top: ${props => (props.children) ? `calc(${variables.size[props.size].dimensions}em + ${props.theme.spacing.small})` : null};
  color: ${(props) => props.inverted ? '#fff' : null};
  vertical-align: middle;

  &:before {
    position: absolute;
    content: '';
    top: 0;
    left: 50%;
    width: 100%;
    height: 100%;
    border-radius: 500rem;
    border: .2em solid ${(props) => props.inverted ? variables.border.inverted : variables.border.regular};
    margin-left: -${props => variables.size[props.size].dimensions/2}em;
    width: ${props => variables.size[props.size].dimensions}em;
    height: ${props => variables.size[props.size].dimensions}em;
  }

  &:after {
    position: absolute;
    content: '';
    top: 0;
    left: 50%;
    width: 100%;
    height: 100%;
    animation: ${animationLoader} .6s linear;
    animation-iteration-count: infinite;
    border-radius: 500rem;
    border-color: #767676 transparent transparent;
    border-style: solid;
    border-width: .2em;
    box-shadow: 0 0 0 1px transparent;
    border-top-color: ${(props) => props.inverted ? '#fff' : null};
    margin-left: -${props => variables.size[props.size].dimensions/2}em;
    width: ${props => variables.size[props.size].dimensions}em;
    height: ${props => variables.size[props.size].dimensions}em;
  }
`;

export default Style;
