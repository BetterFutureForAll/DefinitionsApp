import { parsedDef, regEx } from "../hooks";
import data from '../assets/definitions.json';
import { groupBy, useActive } from '../hooks';

describe('test suite for hooks functions', () => {
  let dataJSON = data.definitionsArray;

  test('regEx returns string without whitespace', async () => {
    let string = 'abc d';
    let expected = 'abc_d';
    let result = regEx(string);
    expect(result).toBe(expected);
  });

  test('groupBy returns an array grouped by a key', () => {
    let result = groupBy(dataJSON, 'dimension');
    // console.log(result);
    expect(Object.keys(result).length).toBe(3);
  });

  test('groupBy sorts components and indicators as needed', () => {
    let components = groupBy(dataJSON, 'component');
    let indicators = groupBy(dataJSON, 'indicator_name');
    // console.log('indicators:',indicators);
    expect(Object.keys(components).length).toBe(12);
    expect(Object.keys(indicators).length).toBe(60);
  });

  test('Can reduce Dimensions, Components, and Indicators recursively', () => {

    let dimensions = groupBy(dataJSON, 'dimension');
    let dimensionKeys = Object.keys(dimensions);
    
    // let result =
    let components ={};
    for(const key in dimensions) {
      let target = groupBy(dimensions[key], 'component');
      components[key] = target;
    }

    dimensionKeys.forEach((d,i)=>{
      expect(Object.keys(components[d]).length).toBe(4);
    });

    expect(dimensionKeys.length).toBe(3);

  });


});