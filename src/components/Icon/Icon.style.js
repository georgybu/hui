import styled from 'styled-components';


const Style = styled.span`
  display: inline-block;
  height: 1em;
  width: 1em;
  max-width: 100%;
  position: relative;
  user-select: none;
  vertical-align: middle;

  color: ${props =>
    (!props.color && 'currentColor') ||
    (props.color === 'white' && '#fff') ||
    (props.theme.colors[props.color])
  };

  font-size: ${props =>
    (props.size === 'small' && '0.8em') ||
    ((props.size === 'medium') && '1em') ||
    (props.size === 'large' && '2em') ||
    (props.size === 'xlarge' && '3em') ||
    (props.size === 'xxlarge' && '5em') ||
    (props.size)
  };

  & > img,
  & > svg  {
    height: 1em;
    width: 1em;
  }

  & > svg {
    fill: currentColor;
  }
`;

export default Style;
