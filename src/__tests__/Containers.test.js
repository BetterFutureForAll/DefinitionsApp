import { render } from "@testing-library/react";
import Components from "../containers/ComponentBox";
import Dimensions from "../containers/DimensionBox";
import renderer from 'react-test-renderer';


describe('Containers separate data into their unique Dimensions and Components', () => {

  test('Creates Component-Box container with multiple Components', () => {

    let testProps = [
      {
     "indicator_number": "1",
     "dimension": "Basic Human Needs",
     "component": "Nutrition and Basic Medical Care",
     "indicator_name": "Infectious diseases ",
     "unit_of_measurement": "(DALYs/100,000)",
     "definition": "d",
     "source": "Institute for Health Metrics and Evaluation",
     "link": "http://ghdx.healthdata.org/gbd-results-tool",
     "notes": "The sum"
   },
   {
     "indicator_number": "2",
     "dimension": "Basic Human Needs",
     "component": "Nutrition and Basic Medical Care",
     "indicator_name": "Infectious diseases ",
     "unit_of_measurement": "(DALYs/100,000)",
     "definition": "d",
     "source": "Institute for Health Metrics and Evaluation",
     "link": "http://ghdx.healthdata.org/gbd-results-tool",
     "notes": "The sum"

   },
   {
     "indicator_number": "4",
     "dimension": "Basic Human Needs",
     "component": "test",
     "indicator_name": "Infectious diseases ",
     "unit_of_measurement": "(DALYs/100,000)",
     "definition": "d",
     "source": "Institute for Health Metrics and Evaluation",
     "link": "http://ghdx.healthdata.org/gbd-results-tool",
     "notes": "The sum"

   },
   {
     "indicator_number": "0",
     "dimension": "",
     "component": "",
     "indicator_name": "tester test",
     "unit_of_measurement": "(100,000)",
     "definition": "test",
     "source": "test",
     "link": "test",
     "notes": ""
   }
]
    let rawData = require('../assets/definitions.json');
    
    const tree = renderer.create(<Components data={rawData.definitionsArray}></Components>).toJSON();

    expect(tree).toMatchSnapshot();

  });

});