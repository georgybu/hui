import styled from 'styled-components';

const variables = {
  titleWidth: 140,
  gutter: '15px'
}

export const StyleDt = styled.dt`
    float: right;
    margin-left: ${variables.gutter};
    width: ${(props) => props.width || variables.titleWidth}px;
    color: ${(props) => props.theme.colors.primary1};
`;

export const StyleDd = styled.dd`
    margin-right: ${(props) => props.width || variables.titleWidth}px;
    margin-bottom: ${(props) => props.theme.spacing.medium};

    &:after {
      content: "";
      display: block;
      clear: right;
    }
`;
