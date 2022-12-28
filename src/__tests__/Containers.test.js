import { render } from "@testing-library/react";
import Components from "../containers/ComponentBox";
import Dimensions from "../containers/DimensionBox";
import renderer from 'react-test-renderer';


describe('Containers separate data into their unique Dimensions and Components', () => {

  test('creates props of unique components as an array', () => {

    let testProps = [
      { "component": "Basic Humans Needs" },
      { "component": "Nutrition and Basic Medical Care" },
      { "component": "Opportunity" },
      { "component": "" }
    ]
    let rawData = require('../assets/definitions.json');
    
    const tree = renderer.create(<Components data={testProps}></Components>).toJSON();

    expect(tree).toMatchSnapshot();

  });

});