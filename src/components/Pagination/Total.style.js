import styled from 'styled-components';


const variables = {
  color: {
    normal: '#d9d9d9',
    active: '#1890ff',
    disabled: 'rgba(0,0,0,0.25)'
  }
}

const Style = styled.li`
  display: inline-block;
  height: 32px;
  margin-right: ${props => props.theme.spacing.small};
  line-height: 30px;
  vertical-align: middle;
`;

export default Style;
