import styled from 'styled-components';


const Style = styled.thead`
  & > tr {
    transition: all .3s, height 0s;

    & > th {
      padding: ${props => props.theme.spacing.medium} ${props => props.theme.spacing.medium};
      color: rgba(0,0,0,0.85);
      transition: background .3s ease;
      background: #fafafa;
      border-bottom: 1px solid #e8e8e8;
    }

    &:not(:last-child) > th[colspan] {
      border-bottom: 0;
    }
  }
`;

export default Style;
