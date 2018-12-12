/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* global React, ReactDOM */

const containerStyle = {
  backgroundColor: 'lightgray',
  padding: 10
};

const contentStyle = {
  backgroundColor: 'white',
  padding: 10
};

function Container({ slot1, slot2 }) {
  return (
    <div style={containerStyle}>
      The 1st item:
      <div style={contentStyle}>{slot1}</div>
      The 2nd item:
      <div style={contentStyle}>{slot2}</div>
    </div>
  );
}

ReactDOM.render(
  <Container slot1={<em>First</em>} slot2={<b>Second</b>} />,
  document.getElementById('app')
);