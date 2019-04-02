import React from 'react';


const Head = ({header, children}) => (
  (header)
    ? <div>{children}</div>
    : null
)

export default Head;
