import styled from 'styled-components';


const Style = styled.label`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: rgba(0,0,0,0.65);
  font-size: 1rem;
  list-style: none;
  position: relative;
  display: inline-block;
  margin-left: ${props => (props.type === 'button') ? null : props.theme.spacing.medium};
  cursor: pointer;
  -webkit-appearance: none;

  &:last-child {
    margin-left: 0;
  }

  & > input {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    cursor: pointer;
    opacity: 0;

    &:checked {
      & + span:before {
        border-color: #40a9ff;
      }
      & + span:after {
        transform: scale(1);
        opacity: 1;
      }
    }

    &:focus {
      & + span:before {
        box-shadow: 0 0 0 2px rgba(24,144,255,0.2);
      }
    }

    &:disabled {
      & + span {
        color: rgba(0,0,0,0.25);
        cursor: not-allowed;
      }

      & + span:before {
        background-color: #f5f5f5;
        border-color: #d9d9d9;
        cursor: not-allowed;
      }
    }

    &:disabled:checked {
      & + span:after {
        background-color: rgba(0,0,0,0.2);
      }
    }
  }

  & > span {
    display: inline-block;
    padding-right: ${props => (props.type === 'button') ? null : `calc(${props.theme.spacing.xsmall} + 16px)`};

    &:before {
      content: ${props => (props.type === 'button') ? null : '""' };
      height: 16px;
      width: 16px;
      position: absolute;
      top: 2px;
      right: 0;
      border: 1px solid #d9d9d9;
      background-color: #fff;
      display: inline-block;
      border-radius: 50%;
      transition: all .3s;
    }

    &:after {
      content: ${props => (props.type === 'button') ? null : '""' };
      position: absolute;
      top: 6px;
      right: 4px;
      width: 8px;
      height: 8px;
      background-color: #40a9ff;
      border-top: 0;
      border-left: 0;
      border-radius: 50%;
      transform: scale(0);
      opacity: 0;
      transition: all .3s cubic-bezier(.78, .14, .15, .86);
    }
  }

  ${props => (props.type === 'button') && `
    & > input:checked {
      & + span {
        border-color: #40a9ff;
        box-shadow: 1px 0 0 0 #1890ff;
      }
    }

    & > input:checked:not(:disabled) + span,
    & > input:hover:not(:disabled) + span {
      color: #40a9ff;
    }

    & > input:disabled + span {
      color: rgba(0,0,0,0.25);
      background-color: #f5f5f5;
      border-color: #d9d9d9;
      cursor: not-allowed;
      box-shadow: none;
    }

    & > input:checked:disabled + span {
      color: #fff;
      background-color: #e6e6e6;
      border-color: #d9d9d9;
    }

    & > span {
      line-height: 40px;
      background: #fff;
      border: 1px solid #d9d9d9;
      border-right: 0;
      padding: 0 ${props.theme.spacing.medium};
    }

    &:first-child > span {
      border-right: 1px solid #d9d9d9;
      box-shadow: none !important;
    }

    &:focus-within {
      z-index: 1;
      & > span {
        outline: 3px solid rgba(24,144,255,0.1);
      }
    }

    // only for ie...
    & > input:focus + span {
      outline: 3px solid rgba(24,144,255,0.1);
    }
  `}
`;

export default Style;
