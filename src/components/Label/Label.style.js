import styled from 'styled-components';

const Style = styled.label`
  color: rgba(0,0,0,0.75);
  display: inline-block;

  ${props => props.required && `
    &:after {
      content: '*';
      color: ${props.theme.colors.danger};
      line-height: 1;
      margin-right: ${props.theme.spacing.xsmall};
      display: inline-block;
      font-size: 0.9rem;
    }
  `}

`;

export default Style;
