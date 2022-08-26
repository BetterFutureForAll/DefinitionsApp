import './App.css';
import * as d3 from 'd3';
import React, { useLayoutEffect, useRef } from 'react';
import basic_needs from './assets/bffa_icons/0_0_basic.png';
import foundations from './assets/bffa_icons/1_0_foundations.png';
import opportunity from './assets/bffa_icons/2_0_opportunity.png';

import advancedEducationStamp from './assets/stamps/Advanced_Education.png';
import basicKnowledgeStamp from './assets/stamps/Basic_Knowledge_2.png';
import environmentalQualityStamp from './assets/stamps/Environmental_Quality.png';
import healthAndWellnessStamp from './assets/stamps/Health_And_Wellness.png';
import inclusivenessStamp from './assets/stamps/Inclusiveness.png';
import infoAndCommunicationsStamp from './assets/stamps/Info_And_Communications.png';
import nutritionAndMedicalStamp from './assets/stamps/Nutrition_Medical_Care.png';
import personalFreedomStamp from './assets/stamps/Personal_Freedom_and_Choice.png';
import personalRightsStamp from './assets/stamps/Personal_Rights.png';
import personalSafetyStamp from './assets/stamps/Personal_Safety.png';
import shelterStamp from './assets/stamps/Shelter.png';
import waterAndSanitationStamp from './assets/stamps/Water_Sanitation.png';

let definitionsCSV = require('./assets/definitions-2021.csv');


let parsedDef = d3.csv(definitionsCSV, function (data) {
  return data;
});

let definitionSwitch = (d) => {
  switch (d[0]) {
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

    case "Access_to_Basic_Knowledge": return advancedEducationStamp;
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

    let d3ref = d3.select(ref.current);
    console.log(groupedData);
    let dimensionDiv = d3ref.selectAll('.dimension')
      .data(groupedData, d => d[0])
      .join(
        enter => {
          let dimDiv = enter
            .append("div")
            .attr("class", (d, i) => { return `dim-${i} dimension`; })
            .attr("id", d => {
              if (d[0].length === 0) {
                return "footer";
              }
              //class and ID to isolate footer
              let id = (d[0]).replace(/ /g, "_");
              return id;
            });

          //Dimensions Title Bar
          let divTitle = dimDiv.append('div').attr("id", d => {
            if (d[0].length === 0) {
              return "footer";
            }
            //class and ID to isolate footer
            let id = (d[0]).replace(/ /g, "_");
            return `${id}_title`;
          }).attr('class', 'dimension-title').on('click', addComponents);
          divTitle.append("h3").text('+').attr("class", "dimension_icon");
          //indicator icon 
          // divTitle.append("h3").text('+').attr("class", "dimension_icon");
          //images
          divTitle.append("img").attr("src", (d, i) => {
            switch (i) {
              case 0: return basic_needs;
              case 1: return foundations;
              case 2: return opportunity;
              default: return;
            }
          }).attr('class', 'dimension_img');
          let componentGroup = dimDiv
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
          componentGroup
          .append("img").attr("src", (d, i) => {
            console.log(d, d[0]);
            console.log(stampSwitch(d));
            return stampSwitch(d);
          }).attr('class', 'component-img');  
          

          return enter;
        });


    console.log(groupedData.get('Component'));
    function addComponents(event, d) {
      console.log(event, d[1]);
      console.log(this);

    };

    // dimensionsDiv.call(addComponents)
  };


  return (
    <div className="definitionsApp" ref={ref} >
    </div>
  );
}

export default App;
