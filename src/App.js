import './App.css';
import React, { useLayoutEffect, useRef } from 'react';
import Draw from "./draw"
import { parsedDef, regEx } from './hooks'

function App() {

  let svgRef = useRef();

  useLayoutEffect(() => {
    parsedDef.then(data => {
      Draw(data, svgRef, regEx);
    });

  }, []);

  return (
    <div className="definitionsApp" ref={svgRef} >
    </div>
  );
}

export default App;
