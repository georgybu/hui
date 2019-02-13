import theme from '../../theme';


const textStyle = `
/**************************************************************
  Name: Text
  Description: Defines styles for text

  Component:
  .u-light
  .u-normal
  .u-bold
  .u-h* - header
  .u-c* - color
  .u-bg - background color
  .u-a-* - align
  .u-nowrap
  .u-truncate
  .u-break

  Remarks:
  t/r/l/b - top/right/left/bottom
  v/h - vertical/horizontal
**************************************************************/


// Weight modifiers
.u-light { font-weight: 300 !important; }
.u-normal { font-weight: normal !important; }
.u-bold { font-weight: bold !important; }

// Header modifiers
.u-h1 { font-size: ${theme.header.fontSize.one} !important; }
.u-h2 { font-size: ${theme.header.fontSize.two} !important; }
.u-h3 { font-size: ${theme.header.fontSize.third} !important; }
.u-h4 { font-size: ${theme.header.fontSize.fourth} !important; }
.u-h5 { font-size: ${theme.header.fontSize.fifth} !important; }
.u-h6 { font-size: ${theme.header.fontSize.sixth} !important; }

// Color modifiers
.u-c1 { color: ${theme.colors.primary1} !important; }
.u-c2 { color: ${theme.colors.primary2} !important; }
.u-c3 { color: ${theme.colors.primary3} !important; }
.u-c4 { color: ${theme.colors.primary4} !important; }

.u-c-white { color: #fff !important; }
.u-c-link { color: ${theme.colors.link} !important; }
.u-c-success { color: ${theme.colors.success} !important; }
.u-c-danger { color: ${theme.colors.danger} !important; }
.u-c-base { color: ${theme.colors.base} !important; }
.u-c-muted,
.u-c-muted:hover,
.u-c-muted:focus {
	color: ${theme.colors.mute} !important;
}

.u-bg1 { background-color: ${theme.colors.primary1} !important; }
.u-bg2 { background-color: ${theme.colors.primary2} !important; }
.u-bg3 { background-color: ${theme.colors.primary3} !important; }
.u-bg4 { background-color: ${theme.colors.primary4} !important; }

.u-bg-white { background-color: #fff !important; }
.u-bg-link { background-color: ${theme.colors.link} !important; }
.u-bg-success { background-color: ${theme.colors.success} !important; }
.u-bg-danger { background-color: ${theme.colors.danger} !important; }
.u-bg-muted { background-color: ${theme.colors.mute} !important; }


// Alignment modifiers
.u-a-left { text-align: left !important; }
.u-a-right { text-align: right !important; }
.u-a-center { text-align: center !important; }

.u-a-top { vertical-align: top !important; }
.u-a-middle { vertical-align: middle !important; }
.u-a-bottom { vertical-align: bottom !important; }

@media (max-width: ${theme.breakpoints.large}) {
	.u-a-left-l { text-align: left !important; }
	.u-a-center-l { text-align: center !important; }
	.u-a-right-l { text-align: right !important; }
}

@media (max-width: ${theme.breakpoints.medium}) {
  .u-a-left-m { text-align: left !important; }
  .u-a-center-m { text-align: center !important; }
  .u-a-right-m { text-align: right !important; }
}

@media (max-width: ${theme.breakpoints.small}) {
	.u-a-left-s { text-align: left !important; }
	.u-a-center-s { text-align: center !important; }
	.u-a-right-s { text-align: right !important; }
}


// Wrap modifiers
// Prevent text from wrapping onto multiple lines
.u-nowrap { white-space: nowrap; }

// Prevent text from wrapping onto multiple lines, and truncate with an ellipsis
.u-truncate {
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
  max-width: 100%;
}

// Break strings if their length exceeds the width of their container
.u-break {
	word-wrap: break-word;
	-webkit-hyphens: auto;
	-ms-hyphens: auto;
	-moz-hyphens: auto;
	hyphens: auto;
}
`;

export default textStyle;