import styled from 'styled-components';

const Style = styled.div`
  transition: opacity 100ms cubic-bezier(0.215,0.61,0.355,1), transform 180ms cubic-bezier(0.215,0.61,0.355,1);
  color: ${props => (props.danger) ? props.theme.colors.danger : props.theme.colors.base};
  font-size: 0.9rem;
  transform-origin: top;
  padding-top: ${props => props.theme.spacing.xsmall};

  ${props => !props.invalid && props.danger && `
    opacity: 0;
    transform: translateY(-10px);
  `}
`;

export default Style;
