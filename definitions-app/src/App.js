import './App.css';
import * as d3 from 'd3';
import React, { useLayoutEffect, useRef } from 'react';

let definitionsCSV = require('./assets/definitions-2021.csv');

let parsedDef = d3.csv(definitionsCSV, function (data) {
  return data;
});

function App() {

  let ref = useRef();

  useLayoutEffect(() => {
    parsedDef.then(data => {
      Draw(data);
    })
  }, [])

  function Draw(data) {
    let groupedData = d3.group(data, d => d["Dimension"], d => d["Component"], d => d['Indicator name']);

    let defDiv = d3.select(ref.current);

    let dimensionsDiv = defDiv.selectAll('.dimension')
      .data(groupedData, d => d[0])
      .join(
        enter => enter
          .append("div")
          .attr("class", (d, i) => { return `dim-${i} dimension`; })
          .attr("id", d => {
            if (d[0].length === 0) {
              return "footer";
            }
            //class and ID to isolate footer
            let id = (d[0]).replace(/ /g, "_");
            return id;
          }));

    dimensionsDiv.selectAll('.component')
      .append('div').attr('class', 'component-box')
      .selectAll('.component')
      .data(groupedData, d => d[0])
      .join(
        enter => enter.append('div').attr("class", "component").attr("id", d => {
          console.log(d);
          let parsedId = d[0].replace(/ /g, "_");
          return parsedId;
        }),
        exit => exit.remove()
      );
  };


  return (
    <div className="DefinitionsApp" ref={ref} >
    </div>
  );
}

export default App;
