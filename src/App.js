import './App.css';
import * as d3 from 'd3';
import React, { useLayoutEffect, useRef } from 'react';

import advancedEducationStamp from './assets/stamps/advanced-education.png';
import basicKnowledgeStamp from './assets/stamps/basic-knowledge.png';
import environmentalQualityStamp from './assets/stamps/environment.png';
import healthAndWellnessStamp from './assets/stamps/health.png';
import inclusivenessStamp from './assets/stamps/inclusiveness.png';
import infoAndCommunicationsStamp from './assets/stamps/communications.png';
import nutritionAndMedicalStamp from './assets/stamps/nutrition.png';
import personalFreedomStamp from './assets/stamps/choice.png';
import personalRightsStamp from './assets/stamps/rights.png';
import personalSafetyStamp from './assets/stamps/safety.png';
import shelterStamp from './assets/stamps/shelter.png';
import waterAndSanitationStamp from './assets/stamps/water.png';

let definitionsCSV = require('./assets/definitions-2021.csv');

let parsedDef = d3.csv(definitionsCSV, function (data) {
  return data['Dimension'].length > 0 ? data : null;
});

let regEx = (d) => {
  return d.replace(/ /g, "_");
}

let textColorSwitch = (d) => {
  switch (regEx(d[0])) {
    case "Nutrition_and_Basic_Medical_Care": return 'rgb(225, 100, 100)';
    case "Water_and_Sanitation": return 'rgb(0, 150, 225)';
    case "Shelter": return 'rgb(255, 100, 255)';
    case "Personal_Safety": return 'rgb(100, 245, 25)';

    case "Access_to_Basic_Knowledge": return 'rgb(255, 150, 150)';
    case "Access_to_Information_and_Communications": return 'rgb(255, 200, 80)';
    case "Health_and_Wellness": return 'rgb(225, 80, 225)';
    case "Environmental_Quality": return 'rgb(75, 250, 0)';

    case "Personal_Rights": return 'rgb(255, 178, 102)';
    case "Personal_Freedom_and_Choice": return 'rgb(255, 155, 255)';
    case "Inclusiveness": return 'rgb(75, 255, 255)';
    case "Access_to_Advanced_Education": return 'rgb(255, 255, 0)';

    default: return '';
  }
};
let definitionSwitch = (d) => {
  switch (regEx(d[0])) {
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
  switch (regEx(d[0])) {
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

function App() {

  let ref = useRef();

  useLayoutEffect(() => {
    parsedDef.then(data => {
      Draw(data);
    })
  }, [])

  function Draw(data) {
    let groupedData = d3.group(data, d => d["Dimension"], d => d["Component"], d => d['Indicator name']);

    let dimensions = d3.select(ref.current);

    dimensions.selectAll('.dimension')
      .data(groupedData, d => d[0])
      .join(
        enter => {
          let div = enter
            .append("div")
            .attr("class", (d, i) => {
              return `dim-${i} dimension`;
            })
            .attr("id", d => {
              let id = regEx(d[0]);
              return id;
            });

          //Dimensions Title Bar
          let divTitle = div.append('h3').attr("id", d => {
            if (d[0].length === 0) {
              return "remove";
            }
            //class and ID to isolate footer
            let id = regEx(d[0]);
            return `${id}_title`;
          }).attr('class', 'dimension-title');

          divTitle.text(d => d[0]).attr("class", "dimension-text");

          let componentGroup = div
            .append('div').attr('class', 'component-box')
            .selectAll('.component')
            .data(d => d[1])
            .join(
              enter => enter.append('div').attr("class", "component").attr("id", d => regEx(d[0])).on('mouseenter', hideStamp)
              .on('mouseleave', showStamp),
              exit => exit.remove()
            );

          //text
          componentGroup
            .append('p')
            .text(d => definitionSwitch(d));

          //Link to indicators  
          componentGroup
            .append("ul")
            .selectAll('li')
            .data(d => d[1])
            .join('li')
            .text(d => d[0]).append("title")
            .text(d => {
              return `${d[1][0]['Source']}`
            });

          //stamp images
          componentGroup
            .append("img").attr("src", d => stampSwitch(d))
            .attr('class', 'component-img').attr('pointer-events', 'none');

          //component title
          componentGroup
            .append('h6').text(d => d[0]).attr("class", "component-title")
            .style("background-color", d => textColorSwitch(d));
            
          return enter;

        });

    function hideStamp(event, d) {
      d3.select(this).select('.component-img').classed('active', true);
    }
    function showStamp(event, d) {
      d3.selectAll('.component-img').classed('active', false);
    }

  };


  return (
    <div className="definitionsApp" ref={ref} >
    </div>
  );
}

export default App;
