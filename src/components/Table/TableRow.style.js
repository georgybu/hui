import styled from 'styled-components';


const Style = styled.tr`
  transition: all .3s, height 0s;

  & > td {
    padding: ${props => props.theme.spacing.medium} ${props => props.theme.spacing.medium};
    color: rgba(0,0,0,0.85);
    transition: background .3s ease;
    background: #fff;
    border-bottom: 1px solid #e8e8e8;
  }
`;

export default Style;
