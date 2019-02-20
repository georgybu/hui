import styled from 'styled-components';


const caculateWidth = (columnsCount, columns) => {
  return columns ? `${(100 / (columnsCount / columns)).toFixed(4)}%` : null
}


const variables = {
  columns: 12,
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
  flex-grow: 1;
  flex-basis: 0;
  max-width: 100%;
  padding: ${props =>
    ((!props.spacing || props.spacing === 'medium') && `0 ${variables.gutterHorizontal.normal}px ${variables.gutterVertical.normal}px 0`) ||
    (props.spacing === 'large' && `0 ${variables.gutterHorizontal.large}px ${variables.gutterVertical.large}px 0`) ||
    (props.spacing === 'empty' && `0`)
  };

  & > * {
    ${props => (props.equalHeight) ? 'height: 100%' : null};
  }

  flex-basis: ${props => caculateWidth(variables.columns, props.col)};
  max-width: ${props => caculateWidth(variables.columns, props.col)};

  @media (min-width: ${props => props.theme.breakpoints.small}) {
    flex-basis: ${props => caculateWidth(variables.columns, props.sm)};
    max-width: ${props => caculateWidth(variables.columns, props.sm)};
  }

  @media (min-width: ${props => props.theme.breakpoints.medium}) {
    flex-basis: ${props => caculateWidth(variables.columns, props.md)};
    max-width: ${props => caculateWidth(variables.columns, props.md)};
  }

  @media (min-width: ${props => props.theme.breakpoints.large}) {
    flex-basis: ${props => caculateWidth(variables.columns, props.lg)};
    max-width: ${props => caculateWidth(variables.columns, props.lg)};
  }
`;

export default Style;
