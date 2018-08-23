/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import React from 'react';

interface IGreetingProps {
  name?: string;
}

const Greeting: React.SFC<IGreetingProps> = props => {
  props = Object.assign({ name: 'World' }, props);
  return <h1>Hello {props.name}!</h1>;
};

export default Greeting;