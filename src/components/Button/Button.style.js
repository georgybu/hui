import styled, { keyframes, css } from 'styled-components';

//TODO: simplify button style code

const variables = {
  normal: {
    background: 'transparent',
    color: (props) => props.theme.colors.base,
    hoverBackground: '#fff',
    focusBorderColor: '#ccc',
    activeBackground: '#babbbc'
  },

  disabled: {
    background: '#f5f5f5',
    color: 'rgba(0,0,0,0.25)'
  },

  primary: {
    background: '#2185d0',
    color: '#fff',
    hoverBackground: '#1678c2',
    focusBorderColor: '#176dad',
    activeBackground: '#1a69a4'
  },

  danger: {
    background: '#f5f5f5',
    color: (props) => props.theme.colors.danger,
    hoverBackground: '#d01919',
    focusBorderColor: '#ca1010',
    activeBackground: '#b21e1e'
  },

  fontFamily: (props) => props.theme.font.family,
  padding: '0.7em 1.3em',
  fontSize: {
    small: '.8rem',
    medium: '1rem',
    large: '1.2rem'
  }
}

const animationButtonSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const loading = css`
  position: relative;
  cursor: default;
  text-shadow: none;
  color: transparent;
  pointer-events: auto;
  transition: all 0s linear, opacity 0.1s ease;

    &:before {
      position: absolute;
      content: '';
      top: 50%;
      left: 50%;
      margin: -.5em 0 0 -.5em;
      width: 1em;
      height: 1em;
      border-radius: 50%;
      border: .2em solid rgba(0,0,0,.15);
      border-color: rgba(0,0,0,.1);
    }

    &:after {
      position: absolute;
      content: '';
      top: 50%;
      left: 50%;
      margin: -.5em 0 0 -.5em;
      width: 1em;
      height: 1em;
      animation: ${animationButtonSpin} .8s linear;
      animation-iteration-count: infinite;
      border-radius: 50%;
      border-color: #fff transparent transparent;
      border-style: solid;
      border-width: .2em;
    }
`;


const Style = styled.button`
  cursor: pointer;
  display: ${props => (props.fluid) ? 'block' : 'inline-block'};
  width: ${props => (props.fluid) ? '100%' : null};
  min-height: 1em;
  outline: none;
  border: 1px solid transparent;
  border-radius: 0;
  vertical-align: baseline;
  background-color: ${props => (props.primary) ? variables.primary.background : variables.normal.background};
	color: ${props =>
    ((!props.primary && !props.danger) && variables.normal.color) ||
    (props.primary && variables.primary.color) ||
    (props.danger && variables.danger.color)
  };
	font-family: ${variables.fontFamily};
  margin: ${props => props.theme.spacing.xsmall};
  padding: ${variables.padding};
  user-select: none;
	text-decoration: none;
	text-align: center;
  font-style: normal;
  line-height: 1em;
	font-size: ${props =>
    ((props.size === 'medium' || !props.size) && variables.fontSize.medium) ||
    (props.size === 'large' && variables.fontSize.large) ||
    (props.size === 'small' && variables.fontSize.small)
  };
  border-color: ${props => !props.danger && !props.primary ? '#d9d9d9' : null};
  text-transform: none;
  transition: outline .1s ease, opacity .1s ease, background-color .1s ease;

  &:focus {
    outline: 1px dotted;
    outline: 5px auto -webkit-focus-ring-color;
  }

  // State: hover
  &:hover:not(:disabled) {
    background-color: ${props =>
      ((!props.primary && !props.danger) && variables.normal.hoverBackground) ||
      (props.primary && variables.primary.hoverBackground) ||
      (props.danger && variables.danger.hoverBackground)
    };
    color: ${props => props.danger ? '#fff' : null}
  }

  // State: focus
  &:focus:not(:disabled) {
    outline: 1px solid ${props =>
      ((!props.primary && !props.danger) && variables.normal.focusBorderColor) ||
      (props.primary && variables.primary.focusBorderColor) ||
      (props.danger && variables.danger.focusBorderColor)
    };
  }

  // State: active
  &:active:not(:disabled) {
    background-color: ${props =>
      ((!props.primary && !props.danger) && variables.normal.activeBackground) ||
      (props.primary && variables.primary.activeBackground) ||
      (props.danger && variables.danger.activeBackground)
    };
    color: ${props => props.danger ? '#fff' : null}
  }

  // State: disabled
  &:disabled {
		opacity: 0.5;
		cursor: not-allowed;
    border-color: #d9d9d9;
    background-color: #f5f5f5;
  }

  ${props => (props.loading ? css`${loading}` : null)}
`;

export default Style;
