import React, { useRef } from 'react';
import * as d3 from 'd3'; 


export function TestApp() {
  let ref = React.createRef();
  return (
    <div className="definitionsApp" ref={ref}>
    </div>
  );
}

export function DrawingTest(svgRef) {
  console.log(svgRef);
  let ref = d3.select(svgRef.current);
  ref.append('div').attr('class', 'div-wrapper');
  console.log('.ref  in d3:', svgRef);
  console.log('.empty():',ref.empty());
  return ref;
}