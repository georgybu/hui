import styled from 'styled-components';


const Style = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: ${props => props.theme.zindex.modal};
  overflow: auto;
  outline: 0;
  -webkit-overflow-scrolling: touch;
  direction: rtl;
`;

export default Style;
