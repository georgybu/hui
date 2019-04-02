import styled from 'styled-components';


const variables = {
  collapseBorderColor: (props) => props.theme.colors.link,
  borderColor: 'rgba(221, 221, 221, 0.3)'
}


export const style = styled.button`
  opacity: 1;
  position: absolute;
  top: 13px;
  left: 20px;
  border: 0 none;
  height: 24px;
  width: 24px;
  appearance: none;
  cursor: pointer;
  padding: 0;
  margin: 0;
  background-color: transparent;
  outline: 0;

  &:before {
    content: "";
    position: absolute;
    display: block;
    height: 12px;
    width: 12px;
    border-left: 2px solid ${variables.collapseBorderColor};
    border-bottom: 2px solid ${variables.collapseBorderColor};
    transition: all 200ms ease-in-out;
    transform-origin: center;
    left: 50%;
    top: 50%;
    transform: ${props => (props.close) ? 'translate(-50%, -50%) rotate(135deg)' : 'translate(-50%, -50%) rotate(315deg)'};

    @media (max-width: ${(props) => props.theme.breakpoints.medium}) {
      border-color: #fff;
    }
  }

  &:focus {
    &:before {
      box-shadow: -1px 1px 0px 1px rgba(24,144,255,0.2);
    }
  }
`;

export default style;
