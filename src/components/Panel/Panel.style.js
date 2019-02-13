import styled from 'styled-components';


const variables = {
  background: {
    color: {
      normal: 'transparent',
      light: '#fff',
      primary: '#e8eaed',
      secondary: (props) => props.theme.colors.primary4,
      dark: (props) => props.theme.colors.primary1
    }
  },
  padding: {
    empty: '0',
    normal: (props) => props.theme.spacing.medium,
    large: (props) => props.theme.spacing.large,
  }
}

const Style = styled.div`
	display: block;

	background-color: ${props =>
    ((!props.type) && variables.background.color.normal) ||
    (variables.background.color[props.type])
  };

	padding: ${props =>
    ((!props.spacing) && variables.padding.normal) ||
    (variables.padding[props.spacing])
  };

  color: ${props => (props.type === 'dark') ? '#fff' : null};
`;

export default Style;
