import React from "react";
import ComponentMaker from "../components/Component";
import { groupBy } from "../hooks";

const Components = ({ props }) => {
  //group by SPI Component

  let groupedComponentObject = groupBy(props, 'component');
  let keys = Object.keys(groupedComponentObject);
  let mappedComponents = keys.map((d, i) => {
    let target = groupedComponentObject[d];
    return <ComponentMaker props={target} key={i}></ComponentMaker>;
  }
  );

  return (
    <div className="component-box">
      {mappedComponents}
    </div>
  );

};

export default Components;

/*
[
         {
        "indicator_number": "1",
        "dimension": "Basic Human Needs",
        "component": "Nutrition and Basic Medical Care",
        "indicator_name": "Infectious diseases ",
        "unit_of_measurement": "(DALYs/100,000)",
        "definition": "",
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
        "definition": "",
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
        "definition": "",
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
        "definition": "",
        "source": "",
        "link": "",
        "notes": ""
      }
]
*/