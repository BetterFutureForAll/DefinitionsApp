import { parsedDef, regEx } from "../hooks";
import rawData from '../assets/definitions.json';
import { nestedData } from '../DimensionBox';
import { useParsedData } from '../hooks';
let data = rawData.definitionsArray;

describe('test suite for hooks functions', ()=>  {

  test('regEx returns string without whitespace', async () => {
    let string = 'abc d';
    let expected = 'abc_d';
    let result = regEx(string);
    expect(result).toBe(expected);
  });
  
  //skipped due to CSV path parsing error is JSDOM
  test('should parse a CSV and return an array of objects', async () => {
    let [data, setData] = useParsedData();
    let result = await data;
    let objectMock = { "key": "value" };
    await expect(result).resolves.toBe(objectMock);
    await expect(result).rejects.toMatch('error');
  
  });

  test('should return a nested data set by keys', () => {
    console.log(nestedData(data));
    expect(nestedData).toMatchSnapshot();
  });
});