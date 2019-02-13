import styled from 'styled-components';


const style = styled.div`
  font-size: 24px;
  line-height: 1;

  @media (max-width: ${(props) => props.theme.breakpoints.medium}) {
    display: inline-block;
  }
`;

export default style;