import React from 'react';
import PropTypes from 'prop-types';
import Tooltip from './ToolTip';

const Indicator = ({ props }) => {
  // citations split fn to create multiple <a href> 

  let links = props.link.split(/\r?\n/);
  let sources = props.source.split(/;/);
  let citations = [];
  links.forEach(function (d, i) {
    citations.push({ link: links[i], source: sources[i], key: [i] })
  });

  let citationGroup = citations.map((citation) => (
    <a
      key={citation.key}
      title={citation.source}
      href={citation.link}
      className="citation"
      target="_blank"
      rel="noopener noreferrer"
    >
      ⓘ
    </a>
  )
  );

  return (
    <li className='list-item'>
    <Tooltip content={props.definition} direction={'bottom'}>
      {props.indicator_name}
      {citationGroup}
    </Tooltip>
    </li>
  )
};

Indicator.propTypes = {
  indicator_number: PropTypes.string,
  dimension: PropTypes.string,
  component: PropTypes.string,
  indicator_name: PropTypes.string,
  definition: PropTypes.string,
  source: PropTypes.string,
  link: PropTypes.string,
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

/* 
<div class="more-info">
The number of universities in a country weighted by the quality of universities, measured by university rankings on any of the three most widely used international assessments. Universities in the top 400 on any list are given double weight. Not ranked universities are given 5% weight of the top ranked universities.
</div>
*/