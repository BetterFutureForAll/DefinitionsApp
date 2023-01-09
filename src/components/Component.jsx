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




/*
{
        "indicator_number": "1",
        "dimension": "Basic Human Needs",
        "component": "Nutrition and Basic Medical Care",
        "indicator_name": "Infectious diseases ",
        "unit_of_measurement": "(DALYs/100,000)",
        "definition": "Age-standardized Disability-Adjusted Life Years (DALYs) rate caused by HIV/AIDS, tuberculosis, diarrhea, intestinal infections, respiratory infections, otitis media, meningitis, encephalitis, diptheria, whooping cough, tetanus, measles, varicella, herpes zoster, malaria, Chagas disease, leishmaniasis, typanosomiasis, schistosomiasis, cysticercosis, cycstic echinococcosis, lymphatic filariasis, onchocerciasis, trachoma, dengue, yellow feber, rabies, intestinal nematode infections, food-borne trematodiases, leprosy, ebola, zika virus, guinea worm disease, sexually transmitted diseases (excluding HIV), hepatitis, and other infectious diseases per 100,000 people.",
        "source": "Institute for Health Metrics and Evaluation",
        "link": "http://ghdx.healthdata.org/gbd-results-tool",
        "notes": "The sum of years lost due to premature death (YLLs) and years lived with disability (YLDs). DALYs are also defined as years of healthy life lost. It is a universal metric that allows researchers and policymakers to compare very different populations and health conditions across time. One DALY equals one lost year of healthy life. DALYs allow us to estimate the total number of years lost due to specific causes and risk factors at the country, regional, and global levels.\r\n\r\nIn the SPI calculations the indicator is capped at the upper boundary at 61253.96."
    },
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
    },
    {
        "indicator_number": "3",
        "dimension": "Basic Human Needs",
        "component": "Nutrition and Basic Medical Care",
        "indicator_name": "Child stunting ",
        "unit_of_measurement": "(0=low risk; 100=high risk) ",
        "definition": "Risk-weighted prevalence of stunting in children under 5 as measured by the summary exposure value (SEV) for child stunting. ",
        "source": "Institute for Health Metrics and Evaluation",
        "link": "http://ghdx.healthdata.org/gbd-results-tool",
        "notes": "Summary Exposure Value is a measure of a population’s exposure to a risk factor that takes into account the extent of exposure by risk level and the severity of that risk’s contribution to disease burden. SEV takes the value zero when no excess risk for a population exists and the value one when the population is at the highest level of risk; we report SEV on a scale from 0% to 100% to emphasize that it is risk-weighted prevalence."
    },
    {
        "indicator_number": "4",
        "dimension": "Basic Human Needs",
        "component": "Nutrition and Basic Medical Care",
        "indicator_name": "Maternal mortality rate ",
        "unit_of_measurement": "(deaths/100,000 live births) ",
        "definition": "Maternal deaths per 100,000 livebirths in women aged 10-54 years.",
        "source": "Institute for Health Metrics and Evaluation",
        "link": "http://ghdx.healthdata.org/record/ihme-data/gbd-2017-health-related-sdgs-1990-2030"
    },
    {
        "indicator_number": "5",
        "dimension": "Basic Human Needs",
        "component": "Nutrition and Basic Medical Care",
        "indicator_name": "Undernourishment ",
        "unit_of_measurement": "(% of pop.) ",
        "definition": "The prevalence of undernourishment expresses the probability that a randomly selected individual from the population consumes an amount of calories that is insufficient to cover her/his energy requirement for an active and healthy life. The indicator is computed by comparing a probability distribution of habitual daily dietary energy consumption with a threshold level called the minimum dietary energy requirement. Both are based on the notion of an average individual in the reference population.",
        "source": "Food and Agriculture Organization of the United Nations",
        "link": "http://www.fao.org/economic/ess/ess-fs/ess-fadata/en/",
        "notes": "In the SPI calculations the indicator is capped at the upper boundary at 49.4."
    },
    {
        "indicator_number": "6",
        "dimension": "Basic Human Needs",
        "component": "Nutrition and Basic Medical Care",
        "indicator_name": "Diet low in fruits and vegetables",
        "unit_of_measurement": "(0=low risk; 100=high risk) ",
        "definition": "Risk-weighted, age-standardized prevalence of nutrition low in fruits and vegetables as measured by the summary exposure value (SEV).",
        "source": "Institute for Health Metrics and Evaluation",
        "link": "http://ghdx.healthdata.org/gbd-results-tool",
        "notes": "Summary Exposure Value is a measure of a population’s exposure to a risk factor that takes into account the extent of exposure by risk level and the severity of that risk’s contribution to disease burden. SEV takes the value zero when no excess risk for a population exists and the value one when the population is at the highest level of risk; we report SEV on a scale from 0% to 100% to emphasize that it is risk-weighted prevalence.\r\n\r\nDiet low in fruits and vegetables is defined as consumption of less than 3 servings (11 ounces total) of fruits per day (includes fresh, frozen, cooked, canned, or dried fruit but excludes fruit juices and salted or pickled fruits) and onsumption of less than 4 servings (14 ounces total) of vegetables per day (includes fresh, frozen, cooked, canned, or dried vegetables including legumes but excluding salted or pickled, juices, nuts and seeds, and starchy vegetables such as potatoes or corn). "
    }
    */