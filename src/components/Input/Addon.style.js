import styled from 'styled-components';


const Style = styled.span`
  position: relative;
  padding: 0 ${props => props.theme.spacing.small};
  color: rgba(0,0,0,0.65);
  font-weight: normal;
  font-size: 1rem;
  line-height: 1;
  text-align: center;
  background-color: #fafafa;
  border: 1px solid #d9d9d9;
  transition: all .3s;
  display: table-cell;
  white-space: nowrap;
  vertical-align: middle;
  width: 1px;
  min-width: 40px;

  ${props => (props.position === 'after') && `
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-right: 0;
  `}

  ${props => (props.position === 'before') && `
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-left: 0;
  `}
`;

export default Style;
