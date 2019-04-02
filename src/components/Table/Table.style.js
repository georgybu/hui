import styled from 'styled-components';


const Style = styled.table`
  width: 100%;
  border-radius: 0;
  border-collapse: collapse;

  ${props => (props.bordered) && `
    border: 1px solid #e8e8e8;

    tr > td,
    tr > th {
      border-left: 1px solid #e8e8e8;
    }
  `}
`;

export default Style;
