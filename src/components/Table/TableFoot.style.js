import styled from 'styled-components';


const Style = styled.tfoot`
  td {
    position: relative;
    padding: ${props => props.theme.spacing.medium} ${props => props.theme.spacing.medium};
    background: #fafafa;
  }
`;

export default Style;
