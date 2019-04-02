import styled from 'styled-components';


const Style = styled.div`
  padding: 0;
  width: ${(props) => props.width};
  margin: 0 auto;
  background-color: #fff;
  position: relative;
  top: 100px;
  margin-bottom: ${props => props.theme.spacing.large};
  z-index: 999;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);

  @media (max-width: ${(props) => props.theme.breakpoints.medium}) {
    max-width: calc(100vw - ${props => props.theme.spacing.medium});
    margin: ${props => props.theme.spacing.small} auto;
  }
`;

export default Style;
