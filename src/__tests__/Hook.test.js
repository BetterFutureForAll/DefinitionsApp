import { parsedDef, regEx } from "../hooks";

test('regEx returns string without whitespace', async () => {
  let string = 'abc d';
  let expected = 'abc_d';
  let result = regEx(string);
  expect(result).toBe(expected);
});

//skipped due to CSV path parsing error is JSDOM
test.skip('should parse a CSV and return an array of objects', async () => {
  let result = await parsedDef;
  let objectMock = { "key": "value" };
  await expect(result).resolves.toBe(objectMock);
  await expect(result).rejects.toMatch('error');

});