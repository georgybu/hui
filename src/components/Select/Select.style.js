import styled from 'styled-components';


const style = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  position: relative;
  display: inline-block;
  color: ${props => props.disabled ? 'rgba(0,0,0,0.25)' : 'rgba(0,0,0,0.65)'};
  font-size: 1rem;
  line-height: 1.5;
  list-style: none;
  width: 100%;
  max-width: 100%;
  background-color: ${props => props.disabled ? '#f5f5f5' : '#fff'};
  cursor: ${props => props.disabled ? 'not-allowed' : null};
  border: 1px solid #d9d9d9;
  border-radius: 0;
  transition: all .3s cubic-bezier(.645, .045, .355, 1);
  user-select: none;
  height: 40px;

  & > div {
    height: 100%;
    line-height: 40px;
    position: relative;
    display: block;
  }
`;

export default style;
