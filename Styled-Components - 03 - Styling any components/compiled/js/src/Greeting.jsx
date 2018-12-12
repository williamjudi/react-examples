/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import React from 'react';

function Greeting({ className, name }) {
  return <h1 className={className}>Hello {name}</h1>;
}

export default Greeting;