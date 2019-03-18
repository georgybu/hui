import React from 'react';
import WithStyle from './TableFoot.style';
import PropTypes from 'prop-types';


function TableFoot({foot, colspan}) {
  if (!foot) {
    return null;
  }

  const text = (typeof foot === 'function')
    ? foot() // TODO: what parameters here?!
    : foot;



  return (
    <WithStyle>
      <tr>
        <td colSpan={colspan}>
          {foot}
        </td>
      </tr>
    </WithStyle>
  )
}

export default TableFoot;
