import React from 'react';
import PropTypes from 'prop-types';


const Indicator = ({ props }) => {
console.log(props)
  // citations split fn to create multiple <a href> 

  return (
    <li title={props.definition} class='list-item'>
      {props.indicator_name}
      <a
        title={props.source}
        href={props.link}
        class="citation"
        target="_blank"
        rel="noopener noreferrer"
        >
        ⓘ
      </a>
    </li>
  )
};

Indicator.propTypes = {
  indicator_number: PropTypes.string,

}

export default Indicator;


/*
{
  "indicator_number": "2",
  "dimension": "Basic Human Needs",
  "component": "Nutrition and Basic Medical Care",
  "indicator_name": "Child mortality rate ",
  "unit_of_measurement": "(deaths/1,000 live births) ",
  "definition": "Probability of dying between birth and exactly 5 years of age, expressed per 1,000 live births. ",
  "source": "UN Inter-agency Group for Child Mortality Estimation",
  "link": "http://www.childmortality.org",
  "notes": "In the SPI calculations the indicator is capped at the upper boundary at 155.6328 deaths per 1,000 live births."
}
*/