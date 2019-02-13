import styled from 'styled-components';

const style = styled.div`
  font-size: 18px;
  
  @media (max-width: ${(props) => props.theme.breakpoints.medium}) {
    display: inline-block;
  }
`;

export default style;