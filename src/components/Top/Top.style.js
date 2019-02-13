import styled from 'styled-components';


const variables = {
  background: (props) => props.theme.colors.primary1,
  height: '44px',
  color: '#fff'
}

const Style = styled.div`
  position: relative;
  height: ${variables.height};
  background-color: ${variables.background};
  color: ${variables.color};
`;

export default Style;