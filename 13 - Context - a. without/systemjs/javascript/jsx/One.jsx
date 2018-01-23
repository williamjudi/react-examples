/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* eslint react/prop-types:"off" */

import React from 'react';

import Two from './Two';

export default class One extends React.Component {
  render() {
    return <Two color={this.props.color} />;
  }
}
