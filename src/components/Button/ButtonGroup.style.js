import styled from 'styled-components';

const Style = styled.div`
  & > button {
    margin: 0;
    &:not(:first-child) {
      border-right: 0 none;
    }
  }
`;

export default Style;
