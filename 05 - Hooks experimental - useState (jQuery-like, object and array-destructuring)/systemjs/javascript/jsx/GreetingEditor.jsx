/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* eslint react/prop-types:"off" */

import React from 'react';

function upperCaseFirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function useState(val, name) {
  const [value, setValue] = React.useState(val);
  const getName = name || 'value';
  const setName = name ? `set${upperCaseFirst(name)}` : 'setValue';

  let result = function(newValue) {
    if (newValue === undefined) {
      return value;
    } else {
      setValue(newValue);
    }
  };

  Object.defineProperty(result, getName, {
    value: value,
    writable: false
  });

  result[setName] = function(val) {
    setValue(val);
  };

  result[Symbol.iterator] = function*() {
    yield value;
    yield setValue;
  };

  return result;
}

function GreetingEditor() {
  // As an iterable (just like React)
  // Get: foo
  // Set: setFoo(...)
  const [foo, setFoo] = useState('Foo');

  // As a object
  // Get: bar.value
  // Set: bar.setValue(...)
  const bar = useState('Bar');

  // As a object (with destructuring )
  // Get: baz
  // Set: setBaz(...)
  const { value: baz, setValue: setBaz } = useState('Baz');

  // As a object (with predefined get/set names)
  // Get: qux.quux
  // Set: qux.setQuux(...)
  const qux = useState('Qux', 'quux');

  // As a object (with predefined get/set names and destructuring)
  // Get: corge
  // Set: setCorge(...)
  const { corge, setCorge } = useState('Corge', 'corge');

  // As jQuery-like getters and setters
  // Get: jq()
  // Set: jq(...)
  const jq = useState('jQuery');

  return (
    <React.Fragment>
      <input onChange={e => setFoo(e.target.value)} value={foo} />
      {` => ${foo}`}
      <br />

      <input onChange={e => bar.setValue(e.target.value)} value={bar.value} />
      {` => ${bar.value}`}
      <br />

      <input onChange={e => setBaz(e.target.value)} value={baz} />
      {` => ${baz}`}
      <br />

      <input onChange={e => qux.setQuux(e.target.value)} value={qux.quux} />
      {` => ${qux.quux}`}
      <br />

      <input onChange={e => setCorge(e.target.value)} value={corge} />
      {` => ${corge}`}
      <br />

      <input onChange={e => jq(e.target.value)} value={jq()} />
      {` => ${jq()}`}
      <br />
    </React.Fragment>
  );
}

export default GreetingEditor;
