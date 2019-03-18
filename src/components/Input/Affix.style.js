import styled from 'styled-components';

const Style = styled.span`
  color: rgba(0, 0, 0, 0.25);
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  right: ${props => (props.type === 'prefix') ? '12px' : null};
  left: ${props => (props.type === 'suffix') ? '12px' : null};
`;

export default Style;
