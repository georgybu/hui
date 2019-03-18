import styled from 'styled-components';

const Style = styled.div`
  transition: color 0.3s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
  color: ${props => (props.danger) ? props.theme.colors.danger : props.theme.colors.base};
  font-size: 0.9rem;
`;

export default Style;
