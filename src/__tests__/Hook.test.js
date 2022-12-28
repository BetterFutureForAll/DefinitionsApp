import { parsedDef, regEx } from "../hooks";
import rawData from '../assets/definitions.json';
import { useParsedData, nestedData } from '../hooks';
let data = rawData.definitionsArray;

describe('test suite for hooks functions', ()=>  {

  test('regEx returns string without whitespace', async () => {
    let string = 'abc d';
    let expected = 'abc_d';
    let result = regEx(string);
    expect(result).toBe(expected);
  });
  
  test('Returns a nested object with unique Dimensions', () => {
    console.log(nestedData());
    
  });

});