import styled from 'styled-components';


const variables = {
  background: '#fff'
}


const style = styled.div`
  display: flex;
  position: relative;
  background-color: ${variables.background};

  @media (max-width: ${(props) => props.theme.breakpoints.medium}) {
    flex-direction: column;
  }
`;

export default style;