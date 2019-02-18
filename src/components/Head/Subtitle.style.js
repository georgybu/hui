import styled from 'styled-components';


const Style = styled.h2`
  margin: 0;
  margin-right: auto;
  font-size: 20px;
  color: #eee;
  margin-top: 4px;
  padding-left: 60px;

  @media (min-width: ${(props) => props.theme.breakpoints.medium}) {
    margin-top: 0;
    padding-left: 0;
  }
`;

export default Style;
