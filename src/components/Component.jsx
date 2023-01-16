import React from 'react';
import PropTypes from 'prop-types';
import Indicator from './Indicator';

import advancedEducationStamp from '../assets/stamps/advanced-education.png';
import basicKnowledgeStamp from '../assets/stamps/basic-knowledge.png';
import environmentalQualityStamp from '../assets/stamps/environment.png';
import healthAndWellnessStamp from '../assets/stamps/health.png';
import inclusivenessStamp from '../assets/stamps/inclusiveness.png';
import infoAndCommunicationsStamp from '../assets/stamps/communications.png';
import nutritionAndMedicalStamp from '../assets/stamps/nutrition.png';
import personalFreedomStamp from '../assets/stamps/choice.png';
import personalRightsStamp from '../assets/stamps/rights.png';
import personalSafetyStamp from '../assets/stamps/safety.png';
import shelterStamp from '../assets/stamps/shelter.png';
import waterAndSanitationStamp from '../assets/stamps/water.png';
import { regEx, useActive } from '../hooks'

let textColorSwitch = (d) => {
  switch (regEx(d)) {
    case "Nutrition_and_Basic_Medical_Care": return { backgroundColor: 'rgb(225, 100, 100)' };
    case "Water_and_Sanitation": return { backgroundColor: 'rgb(0, 150, 225)' };
    case "Shelter": return { backgroundColor: 'rgb(255, 100, 255)' };
    case "Personal_Safety": return { backgroundColor: 'rgb(100, 245, 25)' };

    case "Access_to_Basic_Knowledge": return { backgroundColor: 'rgb(255, 150, 150)' };
    case "Access_to_Information_and_Communications": return { backgroundColor: 'rgb(255, 200, 80)' };
    case "Health_and_Wellness": return { backgroundColor: 'rgb(225, 80, 225)' };
    case "Environmental_Quality": return { backgroundColor: 'rgb(75, 250, 0)' };

    case "Personal_Rights": return { backgroundColor: 'rgb(255, 178, 102)' };
    case "Personal_Freedom_and_Choice": return { backgroundColor: 'rgb(255, 155, 255)' };
    case "Inclusiveness": return { backgroundColor: 'rgb(75, 255, 255)' };
    case "Access_to_Advanced_Education": return { backgroundColor: 'rgb(255, 255, 0)' };

    default: return { backgroundColor: 'white' };
  }
};

let definitionSwitch = (d) => {
  switch (regEx(d)) {
    case "Nutrition_and_Basic_Medical_Care": return 'Do people have enough food to eat and are they receiving basic medical care? ';
    case "Water_and_Sanitation": return 'Can people drink water and keep themselves clean without getting sick?';
    case "Shelter": return 'Do people have adequate housing with basic utilities?';
    case "Personal_Safety": return 'Do people feel safe?';

    case "Access_to_Basic_Knowledge": return 'Do people have access to an educational foundation?';
    case "Access_to_Information_and_Communications": return 'Can people freely access ideas and in formation from anywhere in the world?';
    case "Health_and_Wellness": return 'Do people live long and healthy lives?';
    case "Environmental_Quality": return 'Is this society using its resources so they will be available for future generations?';

    case "Personal_Rights": return 'Are people’s rights as individuals protected?';
    case "Personal_Freedom_and_Choice": return 'Are people free to make their own life choices?';
    case "Inclusiveness": return 'Is no one excluded from the opportunity to be a contributing member of society?';
    case "Access_to_Advanced_Education": return 'Do people have access to the world’s most advanced knowledge?';

    default: return '';
  }
};

let stampSwitch = (d) => {
  switch (regEx(d)) {
    case "Nutrition_and_Basic_Medical_Care": return nutritionAndMedicalStamp;
    case "Water_and_Sanitation": return waterAndSanitationStamp;
    case "Shelter": return shelterStamp;
    case "Personal_Safety": return personalSafetyStamp;

    case "Access_to_Basic_Knowledge": return basicKnowledgeStamp;
    case "Access_to_Information_and_Communications": return infoAndCommunicationsStamp;
    case "Health_and_Wellness": return healthAndWellnessStamp;
    case "Environmental_Quality": return environmentalQualityStamp;

    case "Personal_Rights": return personalRightsStamp;
    case "Personal_Freedom_and_Choice": return personalFreedomStamp;
    case "Inclusiveness": return inclusivenessStamp;
    case "Access_to_Advanced_Education": return advancedEducationStamp;

    default: return '';
  }
}


const ComponentMaker = ({ props }) => {
  let  [activeValue, toggleOn, toggleOff ] = useActive();

  let definitionText = definitionSwitch(props[0].component)
  let stamp = stampSwitch(props[0].component)
  let backgroundColor = textColorSwitch(props[0].component)
  let indicators = props.map((prop, i) => {
    return <Indicator props={prop} key={i}></Indicator>
  })

  return (
    <div className={`component`} id={regEx(props[0].component)} onMouseEnter={toggleOn} onMouseLeave={toggleOff}>
      <p>
        {definitionText}
      </p>
      <ul>
        {indicators}
      </ul>
      <img src={stamp} alt={definitionText} className={`component-img ${activeValue? ' active' : ''}`}></img>
      <h5 className={`component-title${activeValue? ' active' : ''}`} style={backgroundColor}>{props[0].component}</h5>
    </div>
  )

};

ComponentMaker.propTypes = {
  props: PropTypes.array
}

export default ComponentMaker;