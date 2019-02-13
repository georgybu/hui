import { createGlobalStyle } from 'styled-components';
import normalize from './style/normalize';
import global from './style/global';


const Global = createGlobalStyle`
  ${(props) => `
    ${props.reset ? normalize : ''}
    ${props.injectGlobal ? global : ''}
  `}
`;

export default Global;