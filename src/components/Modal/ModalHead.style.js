import styled from 'styled-components';


const Style = styled.div`
  background-color: ${props => props.theme.colors.primary1};
  color: #fff;
  padding: ${props => props.theme.spacing.medium} ${props => props.theme.spacing.large};
  font-size: ${props => props.theme.header.fontSize.third};
  padding-left: calc(${props => props.theme.spacing.large} + 1em);
  position: relative;
  line-height: 1;

  & > button {
    border: 0 none;
    padding: 0;
    margin: 0;
    background-color: transparent;
    cursor: pointer;
    position: absolute;
    top: 50%;
    left: ${props => props.theme.spacing.large};
    transform: translateY(-50%) scale(0.9);
    color: #eee;
    outline: 0;
    transition: all 0.2s ease-in-out;

    &:focus,
    &:hover {
      color: #fff;
      transform: translateY(-50%) scale(1.1);
    }
  }
`;

export default Style;
