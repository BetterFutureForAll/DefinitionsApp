import { parsedDef, regEx } from "../hooks";
import rawData from '../assets/definitions.json';
import { groupBy } from '../hooks';

describe('test suite for hooks functions', () => {

  test('regEx returns string without whitespace', async () => {
    let string = 'abc d';
    let expected = 'abc_d';
    let result = regEx(string);
    expect(result).toBe(expected);
  });

  test('groupBy returns an array grouped by a key', () => {
    let testData =
      [
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
          "indicator_number": "22",
          "dimension": "Foundations of Wellbeing",
          "component": "Access to Basic Knowledge",
          "indicator_name": "Primary school enrollment ",
          "unit_of_measurement": "(% of children) ",
          "definition": "Total number of students of official primary school age who are enrolled in any level of education, expressed as a percentage of the total population of official primary school age. Statistic is termed 'total net primary enrollment rate.'",
          "source": "UN Educational, Scientific, and Cultural Organization Institute for Statistics",
          "link": "http://data.uis.unesco.org/"
        },
        {
          "indicator_number": "39",
          "dimension": "Opportunity",
          "component": "Personal Rights",
          "indicator_name": "Freedom of religion ",
          "unit_of_measurement": "(0=no freedom; 4=full freedom) ",
          "definition": "Country experts' aggregated evaluation of the question, \"Is there freedom of religion?\" ",
          "source": "Varieties of Democracy (V-Dem), Dataset Version 12",
          "link": "https://v-dem.net/vdemds.html",
          "notes": "This indicator specifies the extent to which individuals and groups have the right to choose a religion, change their religion, and practice that religion in private or in public as well as to proselytize peacefully without being subject to restrictions by public authorities. It is measured on an ordinal scale from 0 to 4.\r\n0: Not respected by public authorities. Hardly any freedom of religion exists. Any kind of religious practice is outlawed or at least controlled by the government to the extent that religious leaders are appointed by and subjected to public authorities, who control the activities of religious communities in some detail.\r\n1: Weakly respected by public authorities. Some elements of autonomous organized religious practices exist and are officially recognized. But significant religious communities are repressed, prohibited, or systematically disabled, voluntary conversions are restricted, and instances of discrimination or intimidation of individuals or groups due to their religion are common.\r\n2: Somewhat respected by public authorities. Autonomous organized religious practices exist and are officially recognized. Yet, minor religious communities are repressed, prohibited, or systematically disabled, and/or instances of discrimination or intimidation of individuals or groups due to their religion occur occasionally.\r\n3: Mostly respected by public authorities. There are minor restrictions on the freedom of religion, predominantly limited to a few isolated cases. Minority religions face denial of registration, hindrance of foreign missionaries from entering the country, restrictions against proselytizing, or hindrance to access to or construction of places of worship.\r\n4: Fully respected by public authorities. The population enjoys the right to practice any religious belief they choose. Religious groups may organize, select, and train personnel; solicit and receive contributions; publish; and engage in consultations without undue interference. If religious communities have to register, public authorities do not abuse the process to discriminate against a religion and do not constrain the right to worship before registration.\r\n",
          "variable_name_in_original_souce": "Variable name: v2clrelig_osp"
        }
      ];

      let result = groupBy(testData, 'dimension');

      expect(Object.keys(result).length).toBe(3);
  });


});