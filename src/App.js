import './App.css';
import React, { useLayoutEffect, useRef } from 'react';
import Draw from "./draw"
import { parsedDef, regEx, useParsedData, useDimensions } from './hooks'

function App() {

  let svgRef = useRef();
  let dataJSON = useParsedData();
  let dimensionGroups = useDimensions(dataJSON);
  console.log(dataJSON);
  console.log(dimensionGroups);

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
