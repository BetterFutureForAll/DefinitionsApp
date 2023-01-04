import React from "react";
import Dimension from "../components/Dimension";
import { groupBy } from "../hooks";

const Dimensions = ({ props }) => {

  let groupedDimensionObject = groupBy(props, 'dimension');
  let keys = Object.keys(groupedDimensionObject);
  let dimensionsMap = keys.map((key, i) => {
    let target = groupedDimensionObject[key];
    let props = { [key]: target, index: i }
    return <Dimension props={props} key={i}></Dimension>
  })

  return(
    <div className="div-wrapper">
      {dimensionsMap}
    </div>
  )
}

export default Dimensions;


