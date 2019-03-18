import styled from 'styled-components';


const Style = styled.div`
	background-size: cover;
	height: 100%;
	z-index: ${props => props.theme.zindex.background};
	position: fixed;
	top: 0;
	left: 0;
	right: 0;

	@media (min-width: ${props => props.theme.breakpoints.small}) {
		background-image: url('${props => props.theme.cdn}/images/bg.jpg');
	}
`;

export default Style;
