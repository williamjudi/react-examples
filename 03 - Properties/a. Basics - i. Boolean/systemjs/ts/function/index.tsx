/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018-2020 Rick Beerendonk     !*/

import React from 'react';
import ReactDOM from 'react-dom';

import Greeting from './Greeting';

ReactDOM.render(
  <Greeting name="World" default />,
  document.getElementById('app')
);
