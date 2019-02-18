import styled from 'styled-components';


const variables = {
  padding: {
    vertical: '15px',
    horizontal: '10px'
  },
  minHeight: '70px'
}


const Style = styled.a`
  position: absolute;
  display: block;
  top: ${variables.padding.vertical};
  left: ${variables.padding.horizontal};
  margin-right: 8px;
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: #fff;
  border-radius: 50%;
  border: 2px solid #fff;
  font-size: 1rem;

  &:hover,
  &:focus {
    background: #fff;
    color: #003f80;
    text-decoration: none;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.medium}) {
    position: static;
  }
`;

export default Style;
