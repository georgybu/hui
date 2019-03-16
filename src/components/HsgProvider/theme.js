
const spacingUnit = 8;

const theme = {
  cdn: 'https://new.harel-net.co.il/files/hsg',

  spacing: {
    xsmall: `${spacingUnit * 0.5}px`,
    small: `${spacingUnit * 1}px`,
    medium: `${spacingUnit * 2}px`,
    large: `${spacingUnit * 3}px`,
    xlarge: `${spacingUnit * 4}px`,
    xxlarge: `${spacingUnit * 6}px`,
  },

  global: {
    lineHeight: '1.5'
  },

  font: {
    family: '"mfw_protocolharel", Arial',
    size: '15px'
  },

  header: {
    fontSize: {
      one: '36px',
      two: '28px',
      third: '24px',
      fourth: '20px',
      fifth: '18px',
      sixth: '12px'
    }
  },

  colors: {
    primary1: '#003f80',
    primary2: '#002447',
    primary3: '#c89015',
    primary4: '#e0e8fa',
    link: '#006cb2',
    success: '#388540',
    danger: '#db2828',
    mute: '#999',
    base: '#585858'
  },

  breakpoints: {
    small: '518px',
    medium: '765px',
    large: '1013px'
  },

  zindex: {
    background: -99,
    overlay: 9,
    overlay: 100,
    loader: 110
  }
}


export default theme;
