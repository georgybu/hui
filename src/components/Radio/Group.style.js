import styled from 'styled-components';

const Style = styled.div`
  display: inline-block;

  ${props => (props.vertical) && `
    & > label {
      display: block;
      margin-left: 0;
    }

    & > label + label {
      margin-top: 8px;
    }
  `}
`;

export default Style;
