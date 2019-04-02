import styled from 'styled-components';


const style = styled.div`
  ${props => (!props.hasHead) && `
    margin-top: ${props.theme.spacing.medium};
    padding-top: ${props.theme.spacing.small};
    border-top: 1px solid rgba(221, 221, 221, 0.3);
  `}

  ${props => props.close && `
    max-height: 0;
    overflow: hidden;
    opacity: 0;
    margin-top: 0;
    padding-top: 0;
    border-top: 0 none;
  `}

  transition: all 120ms ease-in-out;
`;

export default style;
