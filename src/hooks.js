import React, { useState, useEffect } from 'react';
import * as d3 from 'd3';
import definitionsCSV from "./assets/def2022.csv";

let definitionsJSON = require('./assets/definitions.json')

export const parsedDef = d3.csv(definitionsCSV, (data) => {
  if (data['Dimension'].length > 0) return data;
});

export const useParsedData = () => {
  let [data, setData] = useState([]);
  useEffect(() => {
    setData(definitionsJSON.definitionsArray)
  }, [])
  console.log(data);
  return data;
}

export const useDimensions = (data) => {
  let [dimensionGroups, setDimensionGroups] = useState({});

  useEffect(() => {
    if (!data) return;
    // let groupedResult = data.group(({ dimension })=> dimension)
    // setDimensionGroups(groupedResult)
  }, [data])
  return dimensionGroups;

}

export const regEx = (d) => {
  return d.replace(/ /g, "_");
}

export const groupBy = (objectArray, property) => {
  let result = objectArray.reduce((acc, obj) => {
    const key = obj[property];
    const curGroup = acc[key] ?? [];
    return { ...acc, [key]: [...curGroup, obj] };
  }, {});

  // filter out blank fields 
  // mutates object
  function clean(obj) {
    for (var propName in obj) {
      if (propName === undefined || propName === 'undefined') {
        delete obj[propName];
      }
    }
    return obj;
  }

  return clean(result);
};