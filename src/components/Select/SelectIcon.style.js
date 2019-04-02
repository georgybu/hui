import styled from 'styled-components';


const style = styled.span`
  user-select: none;
  display: inline-block;
  text-transform: none;
  position: absolute;
  top: 50%;
  left: 14px;
  color: rgba(0,0,0,0.25);
  transform: ${props => props.rotate && props.type !== 'loading' ? 'translate(-50%, -50%) rotate(180deg)' : 'translate(-50%, -50%)'};
  transition: transform 140ms ease-in-out;
`;

export default style;
