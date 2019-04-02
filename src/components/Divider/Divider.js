import React from 'react';
import DivWithStyle from './Divider.style';
import PropTypes from 'prop-types';


function Divider(props) {
  const {
    children,
    orientation,
    vertical,
    dashed
  } = props;


  return (
    <DivWithStyle orientation={orientation} vertical={vertical} dashed={dashed}>
      {children && !vertical &&
        <span>{children}</span>
      }
    </DivWithStyle>
  )
}

Divider.propTypes = {
  /**
   * whether the divider line will be vertical
   */
  vertical: PropTypes.bool,

  /**
   * orientation of divider text
   */
  orientation: PropTypes.oneOf(['left', 'center', 'right']),

  /**
   * wheter the line will be dashed looking
   */
  dashed: PropTypes.bool
}

Divider.defaultProps = {
  vertical: false,
  dashed: false,
  orientation: 'center'
}

export default Divider;
