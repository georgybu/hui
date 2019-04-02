import styled from 'styled-components';


const Style = styled.div`
  width: 100%;
  direction: ${props => props.direction ? props.direction : null};
`;

export default Style;
