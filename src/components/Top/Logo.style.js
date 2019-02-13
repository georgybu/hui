import styled from 'styled-components';


const Style = styled.a`
  height: 100%;
  width: 90px;
  position: relative;
  float: left;
  overflow: hidden;
  user-select: none;
  color: transparent;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url("${(props) => props.theme.cdn}/images/logo.svg");
    background-repeat: no-repeat;
    background-position: center;
  }
`;

export default Style;
