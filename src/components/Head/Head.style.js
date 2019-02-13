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

  .title {
    margin: 0;
    padding-left: 60px;

    @media (min-width: ${(props) => props.theme.breakpoints.medium}) {
      padding-left: 0;
    }
  }

  .subtitle {
    margin: 0;
    margin-right: auto;
    font-size: 20px;
    color: #eee;
    margin-top: 4px;
    padding-left: 60px;

    @media (min-width: ${(props) => props.theme.breakpoints.medium}) {
      margin-top: 0;
      padding-left: 0;
    }
  }

  .pdf {
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
  }
`;

export default style;