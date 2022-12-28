import { parsedDef, regEx } from "../hooks";
import rawData from '../assets/definitions.json';
import { useParsedData, nestedData } from '../hooks';

describe('test suite for hooks functions', ()=>  {

  test('regEx returns string without whitespace', async () => {
    let string = 'abc d';
    let expected = 'abc_d';
    let result = regEx(string);
    expect(result).toBe(expected);
  });

});