import styled from 'styled-components';


const variables = {
  padding: '12px',
  sideWidth: '240px',
  sideBackgroundColor: (props) => props.theme.colors.primary1,
  sideColor: '#fff',
  successSideColor: (props) => props.theme.colors.success,
  dangerSideColor: (props) => props.theme.colors.danger,
  infoSideColor: (props) => props.theme.colors.link,
  successBackgroundImage: `url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 45 45'%3E%3Cpath d='M-297.86 581.635h101v22.5h-101V581.635z'/%3E%3Cpath d='M45.14 22.57c0 12.445-10.125 22.57-22.57 22.6 C10.125 45.1 0 35 0 22.57S10.125 0 22.6 0C35.015 0 45.1 10.1 45.1 22.57z' fill='%23fff'/%3E%3Cpath d='M33.431 15.779c0 0.672-0.583 1.344-0.989 1.855L21.331 32.4 c-0.805 1.013-2.104 1.013-2.908 0l-6.349-8.818c-0.808-1.018-0.813-2.673-0.01-3.698c0.803-1.024 2.109-1.03 2.918-0.013 l4.895 6.988l9.658-12.943c0.809-1.018 2.115-1.012 2.9 0.013C32.852 14.4 33.4 15.1 33.4 15.779z' fill='%23388540'/%3E%3C/svg%3E")`,
  dangerBackgroundImage: `url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 45 45'%3E%3Cpath fill='%23FFFFFF' d='M45.14,22.57c0,12.445-10.125,22.57-22.569,22.57 C10.125,45.141,0,35.016,0,22.57S10.125,0,22.571,0C35.015,0,45.14,10.125,45.14,22.57z'/%3E%3Cpath fill='%23C72027' d='M14.265,13.622c0.777-0.777,2.037-0.777,2.813,0l15.123,15.123 c0.776,0.776,0.776,2.037,0,2.813c-0.776,0.777-2.037,0.777-2.813,0L14.265,16.436C13.488,15.659,13.488,14.399,14.265,13.622z'/%3E%3Cpath fill='%23C72027' d='M32.263,13.622c0.777,0.777,0.777,2.037,0,2.813L17.141,31.559 c-0.777,0.777-2.037,0.777-2.813,0c-0.777-0.776-0.777-2.037,0-2.813l15.124-15.123C30.227,12.845,31.487,12.845,32.263,13.622z'/%3E%3C/svg%3E")`,
  infoBackgroundImage: `url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Cpath d='M16.954,50c-4.4,0-6.2-3.118-4-6.928L28,17.012c2.2-3.811,5.8-3.811,8,0l15.046,26.06 c2.2,3.811,0.4,6.928-4,6.928H16.954z' fill='%23ffffff'/%3E%3Cpath d='M34,32c0,1.105-0.895,2-2,2l0,0c-1.105,0-2-0.895-2-2v-8c0-1.105,0.895-2,2-2l0,0c1.105,0,2,0.895,2,2V32z' fill='%23006cb2'/%3E%3Cpath d='M34,40c0,1.105-0.895,2-2,2l0,0c-1.105,0-2-0.895-2-2l0,0c0-1.105,0.895-2,2-2l0,0 C33.105,38,34,38.895,34,40L34,40z' fill='%23006cb2'/%3E%3C/svg%3E")`
}


const style = styled.div`
  position: relative;
  padding: ${variables.padding};
  color: ${variables.sideColor};
  flex: 0 0 ${variables.sideWidth};
  min-width: ${variables.sideWidth};

  background-color: ${props => 
    (!props.isSpecial && variables.sideBackgroundColor) ||
    (props.success && variables.successSideColor) ||
    (props.danger && variables.dangerSideColor) ||
    (props.info && variables.infoSideColor)
  };

  @media (max-width: ${(props) => props.theme.breakpoints.medium}) {
    flex: initial;
  }

  &:before {
    ${props => (props.isSpecial)
      ? ` content: "";
          display: inline-block;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          height: 50px;
          width: 50px;
          background-repeat: no-repeat;
        `
      : null
    }

    background-image: ${props => 
      (props.success && variables.successBackgroundImage) ||
      (props.danger && variables.dangerBackgroundImage) ||
      (props.info && variables.infoBackgroundImage)
    };
  }

`;

export default style;