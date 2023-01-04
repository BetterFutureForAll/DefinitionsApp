import React from "react";
import data from '../assets/definitions.json';
import { groupBy } from "../hooks";
const keyFixer = (key) => key.replace(/[ \t]+$/, '').replace(/ /g, "_");;

const Dimensions = () => {
let dimensionsData = groupBy(data, 'dimension')
//return arrays of unique dimensions datasets

}

export default Dimensions;


