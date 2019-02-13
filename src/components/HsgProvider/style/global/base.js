import theme from '../../theme';

const variables = {
  background: '#F9F9F9',
  emColor: '#d05',
  insBackground: '#ffa',
  insColor: '#444',
  markBackground: '#ffa',
  markColor: '#444',
  selectionBackground: '#39f',
  selectionColor: '#fff'
}

const baseStyle = `
// Component
html {
  font-size: ${theme.font.size};
  line-height: ${theme.global.lineHeight};
  box-sizing: border-box;
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
}

*, *:before, *:after {
  box-sizing: inherit;
}

body {
  margin: 0;
	background-color: ${variables.background};
	font-family: ${theme.font.family};
	font-weight: normal;
	line-height: ${theme.global.lineHeight};
	color: ${theme.colors.base};
}

a,
area,
button,
[role="button"],
input:not([type=range]),
label,
select,
summary,
textarea {
  -ms-touch-action: manipulation;
      touch-action: manipulation;
}


// Spacing for block elements
p,
h1, h2, h3, h4, h5, h6 {
  margin-top: 0;
  margin-bottom: ${theme.spacing.medium};

  &:last-child {
    margin-bottom: 0;
  }
}


// special elements
code {
  direction: ltr;
  display: inline-block;
}

// Text-level semantics
// Links
a {
	color: ${theme.colors.link};
	text-decoration: none;

	&:hover {
		text-decoration: underline;
	}
}


// Emphasize
em { color: ${variables.emColor}; }

// Insert
ins {
	background: ${variables.insBackground};
	color: ${variables.insColor};
	text-decoration: none;
}

// Mark
mark {
	background: ${variables.markBackground};
	color: ${variables.markColor};
}

// Selection highlight
::-moz-selection {
	background: ${variables.selectionBackground};
	color: ${variables.selectionColor};
	text-shadow: none;
}

::selection {
	background: ${variables.selectionBackground};
	color: ${variables.selectionColor};
	text-shadow: none;
}

// Abbreviation and definition
abbr[title],
dfn[title] {
	cursor: help;
}

dfn[title] {
	border-bottom: 1px dotted;
	font-style: normal;
}


// Embedded content
img {
	max-width: 100%;
	height: auto;
	vertical-align: middle;
}


// Headings
h1, h2, h3, h4, h5, h6 { font-weight: normal; }
h1 { font-size: ${theme.header.fontSize.one} }
h2 { font-size: ${theme.header.fontSize.two} }
h3 { font-size: ${theme.header.fontSize.third} }
h4 { font-size: ${theme.header.fontSize.fourth} }
h5 { font-size: ${theme.header.fontSize.fifth} }
h6 { font-size: ${theme.header.fontSize.sixth} }


// Iframe
iframe { border: 0; }


// Taken from reboot.scss bootstrap 4
// IE10+ doesn't honor <meta name="viewport"> in some cases.
@-ms-viewport {
  width: device-width;
}

// Shim for "new" HTML5 structural elements to display correctly (IE10, older browsers)
article, aside, dialog, figcaption, figure, footer, header, hgroup, main, nav, section {
  display: block;
}

// Suppress the focus outline on elements that cannot be accessed via keyboard.
// This prevents an unwanted focus outline from appearing around elements that
// might still respond to pointer events.
[tabindex="-1"]:focus {
  outline: 0 !important;
}

ol,
ul {
  margin-top: 0;
  margin-bottom: 1rem;
}

ol:last-child,
ul:last-child {
  margin-bottom: 0;
}

ol ol,
ul ul,
ol ul,
ul ol {
  margin-bottom: 0;
}

// Add the correct font size in all browsers
small {
  font-size: 80%;
}

// Prevent sub and sup elements from affecting the line height in all browsers.
sub,
sup {
  position: relative;
  font-size: 75%;
  line-height: 0;
  vertical-align: baseline;
}

sub { bottom: -.25em; }
sup { top: -.5em; }


//
// Links
//

a {
  background-color: transparent;
  -webkit-text-decoration-skip: objects;
}


//
// Images and content
//

img {
  vertical-align: middle;
  border-style: none;
}

svg:not(:root) {
  overflow: hidden;
}


//
// Tables
//
table {
  border-collapse: collapse;
}

caption {
  caption-side: top;
}

th {
  text-align: inherit;
}


//
// Forms
//

input,
select,
optgroup,
textarea {
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}

input {
  overflow: visible;
}

textarea {
  overflow: auto;
  resize: vertical;
}

fieldset {
  min-width: 0;
  padding: 0;
  margin: 0;
  border: 0;
}

legend {
  display: block;
  width: 100%;
  max-width: 100%;
  padding: 0;
  line-height: inherit;
  color: inherit;
  white-space: normal;
}



//
// Correct element displays
//
template {
  display: none;
}

`;

export default baseStyle;