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
  margin-left: ${props => props.hasChildren ? props.theme.spacing.medium : null};
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

    &:checked + span {
      &:before {
        background-color: #40a9ff;
        border-color: #40a9ff;
      }

      &:after {
        opacity: 1;
        transform: rotate(45deg) scale(1);
      }
    }

    &:disabled + span {
      color: rgba(0, 0, 0, 0.25);
      cursor: not-allowed;

      &:before {
        background-color: rgb(245, 245, 245);
        border-color: rgb(217, 217, 217) !important;
      }

      &:after {
        border-color: rgba(0, 0, 0, 0.25);
      }
    }

    &:focus-within {
      z-index: 1;
      & > span {
        border-color: #40a9ff;
      }
    }

    // only for ie...
    & > input:focus + span:before {
      border-color: #40a9ff;
    }

    &:indeterminate + span {
      &:after {
        top: 6px;
        right: 4px;
        width: 8px;
        height: 8px;
        background-color: #40a9ff;
        transform: scale(1);
        opacity: 1;
        border-color: #40a9ff;
      }
    }
  }

  & > span {
    padding-right: calc(${props => props.theme.spacing.xsmall} + 16px);
    display: table;
    min-height: 22px;

    &:before {
      content: "";
      width: 16px;
      height: 16px;
      position: absolute;
      top: 2px;
      right: 0;
      border: 1px solid #d9d9d9;
      background-color: #fff;
      display: inline-block;
      transition: all .3s;
    }

    &:after {
      content: "";
      position: absolute;
      top: 5px;
      right: 5px;
      display: table;
      width: 5px;
      height: 9px;
      border: 2px solid #fff;
      border-top: 0;
      border-left: 0;
      opacity: 0;
      transform: rotate(45deg) scale(0);
      transition: all .2s cubic-bezier(.12, .4, .29, 1.46) .1s;
    }
  }
`;

export default Style;
