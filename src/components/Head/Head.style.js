import styled from 'styled-components';

const variables = {
  padding: {
    vertical: '15px',
    horizontal: '10px'
  },
  minHeight: '70px'
}


const style = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.colors.primary2};
  color: #fff;
  line-height: 1;
  padding: ${variables.padding.vertical} ${variables.padding.horizontal};
  min-height: ${variables.minHeight};
  margin-bottom: ${(props) => props.theme.spacing.small};

  @media (min-width: ${(props) => props.theme.breakpoints.medium}) {
    display: flex;
    align-items: center;
  }
`;

export default style;
