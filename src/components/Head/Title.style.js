import styled from 'styled-components';


const Style = styled.h1`
  margin: 0;
  padding-left: 60px;

  @media (min-width: ${(props) => props.theme.breakpoints.medium}) {
    padding-left: 0;
  }
`;

export default Style;
