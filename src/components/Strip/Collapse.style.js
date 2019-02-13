import styled from 'styled-components';


const variables = {
  collapseBorderColor: (props) => props.theme.colors.link,
  borderColor: 'rgba(221, 221, 221, 0.3)'
}


export const style = styled.button`
  opacity: 1;
  position: absolute;
  top: 10px;
  left: 20px;
  border: 0 none;
  border-right: 1px solid ${variables.borderColor};
  height: 20px;
  width: 26px;
  -webkit-appearance: none;
  -moz-appearance: none;
  cursor: pointer;
  margin: 3px;
  background-color: transparent;
  
  &:before {
    content: "";
    position: absolute;
    top: ${props => (props.close) ? '3px' : '6px'};
    left: 2px;
    display: block;
    height: 12px;
    width: 12px;
    border-left: 2px solid ${variables.collapseBorderColor};
    border-bottom: 2px solid ${variables.collapseBorderColor};
    transform: ${props => (props.close) ? 'rotate(315deg)' : 'rotate(135deg)'};

    @media (max-width: ${(props) => props.theme.breakpoints.medium}) {
      border-color: #fff;
    }
  }
`;

export default style;