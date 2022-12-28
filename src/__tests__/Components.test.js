import Indicator from "../components/Indicator";
import Component from "../components/Component";
import renderer from 'react-test-renderer';


describe('Tests React Components', () => {
  
  test('Should return an Indicator with valid props', () => {

    let testObject = {
      indicator_number: "2",
      dimension: "Basic Human Needs",
      component: "Nutrition and Basic Medical Care",
      indicator_name: "Child mortality rate ",
      unit_of_measurement: "(deaths/1,000 live births) ",
      definition: "Probability of dying between birth and exactly 5 years of age, expressed per 1,000 live births. ",
      source: "UN Inter-agency Group for Child Mortality Estimation",
      link: "http://www.childmortality.org",
      notes: "In the SPI calculations the indicator is capped at the upper boundary at 155.6328 deaths per 1,000 live births."
    }
    
    const tree = renderer
      .create(<Indicator props={testObject}></Indicator>).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('Should create multiple links from a single object', () => {

    let testObject = {
      indicator_number: "60",
      dimension: "Opportunity",
      component: "Access to Advanced Education",
      indicator_name: "Quality weighted universities ",
      unit_of_measurement: "(points)",
      definition: "The number of universities in a country weighted by the quality of universities, measured by university rankings on any of the three most widely used international assessments. Universities in the top 400 on any list are given double weight. Not ranked universities are given 5% weight of the top ranked universities.\r\n",
      source: "Times Higher Education World University Rankings, QS World University Rankings, and Academic Ranking of World Universities; Varieties of Democracy (V-Dem), Dataset Version 12 ; SPI calculations",
      link: "https://www.timeshighereducation.com/world-university-rankings/2022\r\nhttps://www.topuniversities.com/university-rankings/world-university-rankings/2023\r\nhttps://www.shanghairanking.com/rankings/arwu/2020\r\nhttps://v-dem.net/vdemds.html",
      notes: "The total number of universities founded in or before the given year. Universities are considered to be degree-granting institutions of higher education that grant at least one bachelor’s degree or its equivalent, corresponding to International Standard Classification of Education (ISCED) levels 6-8. \r\nIn the SPI calculations the indicator is logarithmically transformed.\r\n",
      variable_name_in_original_source: "Variable name: v2canuni"
    }

    const tree = renderer
      .create(<Indicator props={testObject}></Indicator>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Creates a component with multiple indicators', () => {
    let testArray = [
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
  }];
    
    const tree = renderer
      .create(<Component props={testArray}></Component>).toJSON();
    expect(tree).toMatchSnapshot();
  });




});
