import * as d3 from 'd3';

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
import { regEx } from './hooks'

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

export default function Draw(data, svgRef, regEx) {

  let groupedData = d3.group(data, d => d["Dimension"], d => d["Component"], d => d['Indicator name']);
  let ref = d3.select(svgRef.current);

  ref.selectAll('.div-wrapper').remove();

  let dimWrapper = ref.append('div').attr('class', 'div-wrapper');

  dimWrapper
    .selectAll('.dimension')
    .data(groupedData, d => d[0])
    .join(
      enter => enter
        .append("div")
        .attr("class", (d, i) => {
          return `dim-${i} dimension`;
        })
        .attr("id", d => {
          let id = regEx(d[0]);
          return id;
        }),
      update => update,
      exit => exit.remove()
    );
  //Dimension Titles
  dimWrapper.selectAll(".dimension")
    .append('h3').attr("id", d => {
      let id = regEx(d[0]);
      return `${id}_title`;
    }).attr('class', 'dimension-title')
    .text(d => d[0]);

  //Component Box
  let componentGroup = dimWrapper.selectAll(".dimension")
    .append('div').attr('class', 'component-box')
    .selectAll('.component')
    .data(d => d[1])
    .join(
      enter => enter.append('div').attr("class", "component").attr("id", d => regEx(d[0])).on('mouseenter', hideStamp)
        .on('mouseleave', showStamp),
      exit => exit.remove()
    );

  //text definition paragraphs
  componentGroup
    .append('p')
    .text(d => definitionSwitch(d));

  //Link to indicators  
  let indicators = componentGroup
    .append("ul")
    .selectAll('li')
    .data(d => d[1])
    .join('li')
    .text(d => d[0])
    .attr('title', d => {
      return d[1][0]['Definition'];
    }).attr("class", "list-item")

  indicators
    .selectAll('.citation')
    .data(d => {
      //filters indicators with multiple citations
      let links = d[1][0]['Link'].split(/\r?\n/);
      let sources = d[1][0]['Source'].split(/;/);
      let result = [];
      links.forEach(function (d, i) {
        result.push({ citation: [links[i], sources[i]] })
      });
      return result;
    })
    .join('a')
    .attr('class', 'citation')
    .attr("href", d => {
      return d.citation[0];
    }).text('ⓘ')
    .attr("target", "_blank")
    .attr("rel", "noopener noreferrer")
    .attr('title', d => {
      if (!d.citation[1]) return d.citation[0];
      return d.citation[1];
    });

  //stamp images
  componentGroup
    .append("img").attr("src", d => stampSwitch(d))
    .attr('class', 'component-img').attr('pointer-events', 'none');

  //component title
  componentGroup
    .append('h5').text(d => d[0]).attr("class", "component-title")
    .style("background-color", d => textColorSwitch(d));

  function hideStamp(event, d) {
    d3.select(this).select('.component-img').classed('active', true);
    d3.select(this).select('.component-title').classed('active', true);
  }

  d3.selectAll('.list-item')
    .on("click", moreInfo);

  function showStamp(event, d) {
    //Transition on removal of class
    d3.selectAll('.component-img').classed('active', false);
    d3.selectAll('.component-title').classed('active', false);
  }

  function moreInfo(event, d) {
    console.log(d);
    console.log(event);





    event.preventDefault();
    d3.selectAll('.more-info').remove();
    d3.select(this).selectAll('.more-info')
      .data(d => d[1])
      .join('div')
      .attr("class", 'more-info')
      .text(d => { return (`${d["Definition"]}`); })
      // .selectAll('.citation')
      // .data(d => {
      //   //filters indicators with multiple citations
      //   let links = d['Link'].split(/\r?\n/);
      //   let sources = d['Source'].split(/;/);
      //   let result = [];
      //   links.forEach(function (d, i) {
      //     result.push({ citation: [links[i], sources[i]] })
      //   });
      //   console.log(d,result);
      //   return result
      // })
      // .join('a')
      // .attr('class', 'citation')
      // .attr("href", d => {
      //   console.log(d);
      //   //filters indicators with multiple citations
      //   let links = d['Link'].split(/\r?\n/);
      //   let sources = d['Source'].split(/;/);
      //   let result = [];
      //   links.forEach(function (d, i) {
      //     result.push({ citation: [links[i], sources[i]] })
      //   });
      //   console.log(d,result);

      //   // return d.citation[0];
      // }).text('ⓘ')
      // .attr("target", "_blank")
      // .attr("rel", "noopener noreferrer")
      // .attr('title', d => {
      //   if (!d.citation[1]) return d.citation[0];
      //   return d.citation[1];
      // });;
    d3.selectAll('.list-item')
      .on("click", lessInfo);

    // d3.selectAll('.more-info')
    //   .data(d => {
    //     console.log(d);
    //     //filters indicators with multiple citations
    //     let links = d[1][0]['Link'].split(/\r?\n/);
    //     let sources = d[1][0]['Source'].split(/;/);
    //     let result = [];
    //     links.forEach(function (d, i) {
    //       result.push({ citation: [links[i], sources[i]] })
    //     });

    //     return result;
    //   })

  }

  function lessInfo(event, d) {
    event.preventDefault();
    d3.selectAll('.more-info').remove();

    d3.selectAll('.list-item')
      .on("click", moreInfo);
  };

};