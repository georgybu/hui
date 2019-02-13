import styled from 'styled-components';


const variables = {
  color: {
    normal: 'rgba(0,0,0,0.65)',
    placeholder: '#bfbfbf'
  },
  border: {
    color: {
      normal: '#d9d9d9',
      hover: '#40a9ff',
      focus: '#40a9ff'
    }
  },
  background: {
    color: {
      normal: '#fff',
      disabled: '#f5f5f5'
    }
  }
}

const Style = styled.input`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  list-style: none;
  position: relative;
  display: inline-block;
  padding: 6px 12px;
  width: 100%;
  height: 40px;
  font-size: 16px;
  line-height: 1.5;
  color: ${variables.color.normal};
  background-color: ${variables.background.color.color};
  background-image: none;
  border: 1px solid ${variables.border.color.normal};
  border-radius: 0;
  transition: all .3s;

  &:hover:not(:disabled) {
    border-color: ${variables.border.color.hover};
  }

  &:focus {
    border-color: ${variables.border.color.focus};
    outline: 0;
    box-shadow: 0 0 0 2px rgba(24,144,255,0.2);
  }

  &::-moz-placeholder {
    color: ${variables.color.placeholder};
    opacity: 1;
    font-weight: 300;
  }

  &:-ms-input-placeholder {
    color: ${variables.color.placeholder};
    font-weight: 300;
  }

  &::-webkit-input-placeholder {
    color: ${variables.color.placeholder};
    font-weight: 300;
  }

  &:disabled {
    background-color: ${variables.background.color.disabled};
    opacity: 1;
    cursor: not-allowed;
    color: rgba(0,0,0,0.25);
  }
`;


export default Style;
