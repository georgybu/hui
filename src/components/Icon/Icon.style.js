import styled from 'styled-components';


const Style = styled.svg`
  display: inline-block;
  fill: currentColor;
  fill: ${props => 
    (!props.color && 'currentColor') || 
    (props.color === 'white' && '#fff') || 
    (props.theme.colors[props.color])
  };
  height: ${props => 
    (props.size === 'small' && '0.8em') ||
    ((props.size === 'medium' || !props.size) && '1em') ||
    (props.size === 'large' && '2em') ||
    (props.size === 'xlarge' && '3em') ||
    (props.size === 'xxlarge' && '5em')
  };
  max-width: 100%;
  position: relative;
  user-select: none;
  vertical-align: middle;
`;

export default Style;