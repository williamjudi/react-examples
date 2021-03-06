/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';

function useMousePosition() {
  const [mousePosition, setMousePosition] = React.useState({
    x: undefined,
    y: undefined
  });

  React.useEffect(() => {
    function handleMouseOver(e) {
      setMousePosition({ x: e.pageX, y: e.pageY });
    }
    document.addEventListener('mousemove', handleMouseOver);
    return () => {
      document.removeEventListener('mousemove', handleMouseOver);
    };
  }, [setMousePosition]);

  // Return current state
  return mousePosition;
}

export default useMousePosition;
