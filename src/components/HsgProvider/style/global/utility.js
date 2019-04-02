import theme from '../../theme';


const variables = {
  wrapMediumMaxWidth: `${733 + (16 * 2)}px`, //($utility-wrap-medium-width + (${theme.spacing.medium} * 2))
  wrapMaxWidth: `${980 + (16 * 2)}px` //($utility-wrap-width + (${theme.spacing.medium} * 2))
};


const utilityStyle = `
/**************************************************************
  Name: Utility
  Description: Defines utility classes for global style

  Component:
  .u-m* - margin
  .u-p* - padding
  .u-d-* - display
  .u-wrap

  Remarks:
  p/m - margin/padding
  t/r/l/b - top/right/left/bottom
  v/h - vertical/horizontal
  d - display
  sr - screen reader
  n - none
  i - inline
  b - block
  ib - inline block
**************************************************************/


// Float handling:
// Micro clearfix
.u-clearfix{
  &:before, &:after {
    content: " ";
    display: table;
  }

  &:after { clear: both; }
}

// Float. Prevent content overflow on small devices
.u-left { float: left !important; }
.u-right { float: right !important; }

.u-left,
.u-right {
  max-width: 100%;
  @media (max-width: ${theme.breakpoints.small}) { float: none !important; }
}


// Spacing options:
// Margin
.u-m-xs  { margin: ${theme.spacing.xsmall} !important; }
.u-mt-xs { margin-top: ${theme.spacing.xsmall} !important; }
.u-mr-xs { margin-right: ${theme.spacing.xsmall} !important; }
.u-mb-xs { margin-bottom: ${theme.spacing.xsmall} !important; }
.u-ml-xs { margin-left: ${theme.spacing.xsmall} !important; }

.u-m-s  { margin: ${theme.spacing.small} !important; }
.u-mt-s { margin-top: ${theme.spacing.small} !important; }
.u-mr-s { margin-right: ${theme.spacing.small} !important; }
.u-mb-s { margin-bottom: ${theme.spacing.small} !important; }
.u-ml-s { margin-left: ${theme.spacing.small} !important; }

.u-m-m  { margin: ${theme.spacing.medium} !important; }
.u-mt-m { margin-top: ${theme.spacing.medium} !important; }
.u-mr-m { margin-right: ${theme.spacing.medium} !important; }
.u-mb-m { margin-bottom: ${theme.spacing.medium} !important; }
.u-ml-m { margin-left: ${theme.spacing.medium} !important; }

.u-m-l  { margin: ${theme.spacing.large} !important; }
.u-mt-l { margin-top: ${theme.spacing.large} !important; }
.u-mr-l { margin-right: ${theme.spacing.large} !important; }
.u-mb-l { margin-bottom: ${theme.spacing.large} !important; }
.u-ml-l { margin-left: ${theme.spacing.large} !important; }

.u-m-xl  { margin: ${theme.spacing.xlarge} !important; }
.u-mt-xl { margin-top: ${theme.spacing.xlarge} !important; }
.u-mr-xl { margin-right: ${theme.spacing.xlarge} !important; }
.u-mb-xl { margin-bottom: ${theme.spacing.xlarge} !important; }
.u-ml-xl { margin-left: ${theme.spacing.xlarge} !important; }

.u-m-xxl  { margin: ${theme.spacing.xxlarge} !important; }
.u-mt-xxl { margin-top: ${theme.spacing.xxlarge} !important; }
.u-mr-xxl { margin-right: ${theme.spacing.xxlarge} !important; }
.u-mb-xxl { margin-bottom: ${theme.spacing.xxlarge} !important; }
.u-ml-xxl { margin-left: ${theme.spacing.xxlarge} !important; }

.u-m-del  { margin: 0 !important; }
.u-mt-del { margin-top: 0 !important; }
.u-mb-del { margin-bottom: 0 !important; }
.u-ml-del { margin-left: 0 !important; }
.u-mr-del { margin-right: 0 !important; }

// Padding
.u-p-xs  { padding: ${theme.spacing.xsmall} !important; }
.u-pt-xs { padding-top: ${theme.spacing.xsmall} !important; }
.u-pr-xs { padding-right: ${theme.spacing.xsmall} !important; }
.u-pb-xs { padding-bottom: ${theme.spacing.xsmall} !important; }
.u-pl-xs { padding-left: ${theme.spacing.xsmall} !important; }

.u-p-s  { padding: ${theme.spacing.small} !important; }
.u-pt-s { padding-top: ${theme.spacing.small} !important; }
.u-pr-s { padding-right: ${theme.spacing.small} !important; }
.u-pb-s { padding-bottom: ${theme.spacing.small} !important; }
.u-pl-s { padding-left: ${theme.spacing.small} !important; }

.u-p-m  { padding: ${theme.spacing.medium} !important; }
.u-pt-m { padding-top: ${theme.spacing.medium} !important; }
.u-pr-m { padding-right: ${theme.spacing.medium} !important; }
.u-pb-m { padding-bottom: ${theme.spacing.medium} !important; }
.u-pl-m { padding-left: ${theme.spacing.medium} !important; }

.u-p-l  { padding: ${theme.spacing.large} !important; }
.u-pt-l { padding-top: ${theme.spacing.large} !important; }
.u-pr-l { padding-right: ${theme.spacing.large} !important; }
.u-pb-l { padding-bottom: ${theme.spacing.large} !important; }
.u-pl-l { padding-left: ${theme.spacing.large} !important; }

.u-p-xl  { padding: ${theme.spacing.xlarge} !important; }
.u-pt-xl { padding-top: ${theme.spacing.xlarge} !important; }
.u-pr-xl { padding-right: ${theme.spacing.xlarge} !important; }
.u-pb-xl { padding-bottom: ${theme.spacing.xlarge} !important; }
.u-pl-xl { padding-left: ${theme.spacing.xlarge} !important; }

.u-p-xxl  { padding: ${theme.spacing.xxlarge} !important; }
.u-pt-xxl { padding-top: ${theme.spacing.xxlarge} !important; }
.u-pr-xxl { padding-right: ${theme.spacing.xxlarge} !important; }
.u-pb-xxl { padding-bottom: ${theme.spacing.xxlarge} !important; }
.u-pl-xxl { padding-left: ${theme.spacing.xxlarge} !important; }

.u-p-del  { padding: 0 !important; }
.u-pt-del { padding-top: 0 !important; }
.u-pb-del { padding-bottom: 0 !important; }
.u-pl-del { padding-left: 0 !important; }
.u-pr-del { padding-right: 0 !important; }


// Display options:
// display only for screen readers (accessibiliy helper)
.u-d-sr {
	position: absolute;
	width: 1px;
	height: 1px;
	padding: 0;
	margin: -1px;
	overflow: hidden;
	clip: rect(0,0,0,0);
  border: 0;
  white-space: nowrap;
}

.u-d-n { display: none !important; }
.u-d-b { display: block !important; }
.u-d-i { display: inline !important; }
.u-d-ib { display: inline-block !important; }


// Wrapper
.u-wrap {
  position: relative;
	margin-left: auto;
	margin-right: auto;
	float: none;
	clear: both;
  max-width: ${variables.wrapMaxWidth};
  padding: 0 ${theme.spacing.medium};

  @media (max-width: ${theme.breakpoints.large}) {
		max-width: ${variables.wrapMediumMaxWidth};
  }

  @media (max-width: ${theme.breakpoints.small}) {
		padding: 0 ${theme.spacing.small};
	}

	&:before, &:after {
		content: " ";
		display: table;
	}

	&:after { clear: both; }
}
`;

export default utilityStyle;
