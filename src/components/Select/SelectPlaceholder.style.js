import styled from 'styled-components';


const style = styled.div`
  user-select: none;
  position: absolute;
  top: 50%;
  right: 8px;
  left: 0;
  max-width: 100%;
  height: 20px;
  margin-top: -10px;
  overflow: hidden;
  color: #bfbfbf;
  line-height: 20px;
  white-space: nowrap;
  text-overflow: ellipsis;

  display: ${props => props.visible ? 'block' : 'none'};
`;

export default style;
