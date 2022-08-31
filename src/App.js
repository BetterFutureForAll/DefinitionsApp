import './App.css';
import * as d3 from 'd3';
import React, { useLayoutEffect, useRef } from 'react';

import advancedEducationStamp from './assets/stamps/advanced-education.png';
import basicKnowledgeStamp from './assets/stamps/basic-knowledge.png';
import environmentalQualityStamp from './assets/stamps/environmental-quality.png';
import healthAndWellnessStamp from './assets/stamps/health-and-wellness.png';
import inclusivenessStamp from './assets/stamps/inclusiveness.png';
import infoAndCommunicationsStamp from './assets/stamps/info-and-comm.png';
import nutritionAndMedicalStamp from './assets/stamps/nutrition.png';
import personalFreedomStamp from './assets/stamps/freedom.png';
import personalRightsStamp from './assets/stamps/rights.png';
import personalSafetyStamp from './assets/stamps/safety.png';
import shelterStamp from './assets/stamps/shelter.png';
import waterAndSanitationStamp from './assets/stamps/water-sanitation.png';

let definitionsCSV = require('./assets/definitions-2021.csv');

let parsedDef = d3.csv(definitionsCSV, function (data) {
  return data['Dimension'].length > 0 ? data : null;
});

let definitionSwitch = (d) => {
  switch (d[0].replace(/ /g, "_")) {
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
  switch (d[0].replace(/ /g, "_")) {
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
              let id = (d[0]).replace(/ /g, "_");
              return id;
            });

          //Dimensions Title Bar
          let divTitle = div.append('h3').attr("id", d => {
            if (d[0].length === 0) {
              return "remove";
            }
            //class and ID to isolate footer
            let id = (d[0]).replace(/ /g, "_");
            return `${id}_title`;
          }).attr('class', 'dimension-title');

          divTitle.text(d => d[0]).attr("class", "dimension-text");

          //indicator icon 
          // divTitle.append("h3").text('+').attr("class", "dimension_icon");
          //images
          // divTitle.append("img").attr("src", (d, i) => {
          //   switch (i) {
          //     case 0: return basic_needs;
          //     case 1: return foundations;
          //     case 2: return opportunity;
          //     default: return;
          //   }
          // }).attr('class', 'dimension-img');
          let componentGroup = div
            .append('div').attr('class', 'component-box')
            .selectAll('.component')
            .data(d => d[1])
            .join(
              enter => enter.append('div').attr("class", "component").attr("id", d => {
                let parsedId = d[0].replace(/ /g, "_");
                return parsedId;
              }),
              exit => exit.remove()
            );
          //component title
          componentGroup
            .append('h4').text(d => d[0])
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
            .text(d => {
              return d[0]
            })
          //stamp images
          componentGroup
            .append("img").attr("src", (d, i) => {
              return stampSwitch(d);
            }).attr('class', 'component-img').on('mouseenter', hideStamp).on('mouseleave', showStamp);


          return enter;

        });




    function hideStamp(event, d) {
      d3.select(this).style("opacity", 0)
    }
    function showStamp(event, d) {
      d3.selectAll('.component-img').style("opacity", 100)
    }

  };


  return (
    <div className="definitionsApp" ref={ref} >
    </div>
  );
}

export default App;
