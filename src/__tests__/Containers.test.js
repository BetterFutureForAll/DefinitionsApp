import { render } from "@testing-library/react";
import Components from "../containers/ComponentBox";
import Dimensions from "../containers/DimensionBox";
import renderer from 'react-test-renderer';


describe('Containers separate data into their unique Dimensions and Components', () => {
  let rawData = require('../assets/definitions.json');

  test('Creates Component-Box container with multiple Components', () => {

    const tree = renderer.create(<Components props={rawData.definitionsArray}></Components>).toJSON();

    expect(tree).toMatchSnapshot();

  });

  test('Creates', () => {

    const tree = renderer.create(<Dimensions props={rawData.definitionsArray}></Dimensions>).toJSON();

    expect(tree).toMatchSnapshot();

    
  });



});