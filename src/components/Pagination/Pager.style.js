import styled from 'styled-components';


const variables = {
  color: {
    normal: '#d9d9d9',
    active: '#1890ff',
    disabled: 'rgba(0,0,0,0.25)'
  }
}


const Style = styled.li`
  user-select: none;
  list-style: none;
  margin-left: ${props => props.theme.spacing.small};
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  border: 1px solid  ${props => (props.active) ? variables.color.active : variables.color.normal};
  background-color: #fff;
  min-width: 32px;
  height: 32px;
  line-height: 30px;
  border-radius: 4px;
  text-align: center;
  outline: 0;
  font-size: 1rem;
  transition: all .3s;
  cursor: ${props => (props.disabled) ? 'not-allowed' : null};

  &:last-child {
    margin-left: 0;
  }

  ${props => (!props.disabled) && `
    &:hover,
    &:focus {
      border-color: ${variables.color.active};

      a {
        color: ${variables.color.active};
      }
    }
  `}

  a {
    margin: 0 6px;
    color: ${props =>
      (props.disabled && variables.color.disabled) ||
      (props.active && variables.color.active) ||
      (props.theme.colors.base)
    };
    cursor: ${props => (props.disabled) ? 'not-allowed' : null};

    &:hover {
      text-decoration: none;
    }
  }
`;

export default Style;
