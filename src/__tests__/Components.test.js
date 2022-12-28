import Indicator from "../components/Indicator";
import renderer from 'react-test-renderer';


describe('Tests React Components', () => {
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

  test('Should return an Indicator with valid props', () => {
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
});
