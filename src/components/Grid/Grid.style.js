import styled from 'styled-components';

const variables = {
  gutterHorizontal: {
    normal: 8,
    large: 20
  },
  gutterVertical: {
    normal: 8,
    large: 20
  }
}

const Style = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin: ${props => 
    ((!props.spacing || props.spacing === 'medium') && `0 ${0 - variables.gutterHorizontal.normal}px 0 0`) ||
    (props.spacing === 'large' && `0 ${0 - variables.gutterHorizontal.large}px 0 0`) ||
    (props.spacing === 'empty' && `0`)
  };
  padding: 0;
  list-style: none;

  flex-direction: ${props => 
    ((!props.direction || props.direction === 'row') && 'row') ||
    (props.direction === 'col' && 'column') ||
    (props.direction === 'colreverse' && 'column-reverse') ||
    (props.direction === 'rowreverse' && 'row-reverse')
  };

  justify-content: ${props =>
    (props.justify === 'between' && 'space-between') ||
    (props.justify === 'around' && 'space-around') ||
    (props.justify === 'center' && 'center')
  };

  align-items: ${props =>
    (props.align === 'center' && 'center') ||
    (props.align === 'bottom' && 'bottom')
  };
`;

export default Style;