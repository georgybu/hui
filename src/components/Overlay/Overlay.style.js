import styled from 'styled-components';

const Style = styled.div`
  position: ${props => props.fullscreen ? 'fixed' : 'absolute'};
  top: 0;
  left: 0;
  z-index: ${props => props.theme.zindex.overlay};
  display: block;
  width: 100%;
  height: 100%;
  user-select: none;
  clear: both;
  overflow: hidden;
  background-color: ${props => props.light ? 'rgba(255,255,255,0.65)' : 'rgba(0,0,0,0.55)'};
`;

export default Style;
