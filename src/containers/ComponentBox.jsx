import React from "react";
import Indicator

from "../components/Indicator";
const Component = (props) => {
  //map indicators

  return (
    <Indicator props={props}/>
  )
};

export default Component;

/*
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
    },
    {
        "indicator_number": "7",
        "dimension": "Basic Human Needs",
        "component": "Water and Sanitation",
        "indicator_name": "Access to improved sanitation ",
        "unit_of_measurement": "(proportion of pop.) ",
        "definition": "Proportion of population with access to improved toilet types as defined by the Joint Monitoring Program (JMP).",
        "source": "Institute for Health Metrics and Evaluation",
        "link": "http://ghdx.healthdata.org/record/global-burden-disease-study-2019-gbd-2019-covariates-1980-2019"
    },
    {
        "indicator_number": "8",
        "dimension": "Basic Human Needs",
        "component": "Water and Sanitation",
        "indicator_name": "Access to improved water source ",
        "unit_of_measurement": "(proportion of pop.) ",
        "definition": "Proportion of population with access to improved water sources as defined by the Joint Monitoring Program (JMP).",
        "source": "Institute for Health Metrics and Evaluation",
        "link": "http://ghdx.healthdata.org/record/global-burden-disease-study-2019-gbd-2019-covariates-1980-2019"
    },
    {
        "indicator_number": "9",
        "dimension": "Basic Human Needs",
        "component": "Water and Sanitation",
        "indicator_name": "Unsafe water, sanitation and hygiene",
        "unit_of_measurement": "(DALYs/100,000)",
        "definition": "Age-standardized Disability-Adjusted Life Years (DALYs) rate attributable to unsafe water, sanitation and hygiene per 100,000 people.",
        "source": "Institute for Health Metrics and Evaluation",
        "link": "http://ghdx.healthdata.org/gbd-results-tool",
        "notes": "The sum of years lost due to premature death (YLLs) and years lived with disability (YLDs). DALYs are also defined as years of healthy life lost. It is a universal metric that allows researchers and policymakers to compare very different populations and health conditions across time. One DALY equals one lost year of healthy life. DALYs allow us to estimate the total number of years lost due to specific causes and risk factors at the country, regional, and global levels.\r\n\r\nIn the SPI calculations the indicator is capped at the upper boundary at 10850.66."
    },
    {
        "indicator_number": "10",
        "dimension": "Basic Human Needs",
        "component": "Water and Sanitation",
        "indicator_name": "Satisfaction with water quality",
        "unit_of_measurement": "(proportion of pop.) ",
        "definition": "The proportion of respondents answering 'satisfied' to the question, \"In the city or area where you live, are you satisfied or dissatisfied with the quality of water?\"",
        "source": "Gallup World Poll",
        "link": "https://ga.gallup.com/",
        "notes": "In the SPI calculations the indicator is calculated as floating 3-year average to limit volatility. "
    },
    {
        "indicator_number": "11",
        "dimension": "Basic Human Needs",
        "component": "Shelter",
        "indicator_name": "Household air pollution",
        "unit_of_measurement": "(DALYs/100,000)",
        "definition": "Age-standardized Disability-Adjusted Life Years (DALYs) rate caused by household air pollution from solid fuels per 100,000 people. Household air pollution includes exposure to particulate matter less than 2.5 microns in diameter (PM2.5) due to the use of solid fuels for cooking, including coal, charcoal, wood, agricultural residue, and animal dung.",
        "source": "Institute for Health Metrics and Evaluation",
        "link": "http://ghdx.healthdata.org/gbd-results-tool",
        "notes": "The sum of years lost due to premature death (YLLs) and years lived with disability (YLDs). DALYs are also defined as years of healthy life lost. It is a universal metric that allows researchers and policymakers to compare very different populations and health conditions across time. One DALY equals one lost year of healthy life. DALYs allow us to estimate the total number of years lost due to specific causes and risk factors at the country, regional, and global levels."
    },
    {
        "indicator_number": "12",
        "dimension": "Basic Human Needs",
        "component": "Shelter",
        "indicator_name": "Dissatisfaction with housing affordability ",
        "unit_of_measurement": "(proportion of pop.) ",
        "definition": "The proportion of respondents answering 'dissatisfied' to the question, “In the city or area where you live, are you satisfied or dissatisfied with the availability of good, affordable housing?”",
        "source": "Gallup World Poll",
        "link": "https://ga.gallup.com/",
        "notes": "In the SPI calculations the indicator is calculated as floating 3-year average to limit volatility. "
    },
    {
        "indicator_number": "13",
        "dimension": "Basic Human Needs",
        "component": "Shelter",
        "indicator_name": "Access to electricity ",
        "unit_of_measurement": "(% of pop.) ",
        "definition": "The percentage of the population with access to electricity.",
        "source": "SE4ALL Global Tracking Framework (World Bank, International Energy Agency, and the Energy Sector Management Assistance Program)",
        "link": "https://data.worldbank.org/indicator/EG.ELC.ACCS.ZS"
    },
    {
        "indicator_number": "14",
        "dimension": "Basic Human Needs",
        "component": "Shelter",
        "indicator_name": "Usage of clean fuels and technology for cooking ",
        "unit_of_measurement": "(% of pop.) ",
        "definition": "The proportion of  population primarily using clean cooking fuels and technologies for cooking.",
        "source": "World Health Organization",
        "link": "https://apps.who.int/gho/data/node.main.SDGFUELS712?lang=en"
    },
    {
        "indicator_number": "15",
        "dimension": "Basic Human Needs",
        "component": "Personal Safety",
        "indicator_name": "Interpersonal violence  ",
        "unit_of_measurement": "(DALYs/100,000)",
        "definition": "Age-standardized Disability-Adjusted Life Years (DALYs) per 100,000 people from interpersonal violence. Interpersonal violence is defined as death or disability from intentional use of physical force or power, threatened or actual, from another person or group not including military or police forces.",
        "source": "Institute for Health Metrics and Evaluation",
        "link": "http://ghdx.healthdata.org/gbd-results-tool",
        "notes": "The sum of years lost due to premature death (YLLs) and years lived with disability (YLDs). DALYs are also defined as years of healthy life lost. It is a universal metric that allows researchers and policymakers to compare very different populations and health conditions across time. One DALY equals one lost year of healthy life. DALYs allow us to estimate the total number of years lost due to specific causes and risk factors at the country, regional, and global levels. \r\n\r\nIn the SPI calculations the indicator is logarithmically transformed."
    },
    {
        "indicator_number": "16",
        "dimension": "Basic Human Needs",
        "component": "Personal Safety",
        "indicator_name": "Transportation related injuries ",
        "unit_of_measurement": "(DALYs/100,000)",
        "definition": "Age-standardized Disability-Adjusted Life Years (DALYs) per 100,000 people due to injuries related to transportation. These injuries include road injuries (death or disability due to unintentional interaction with an automobile, motorcycle, pedal cycle, or other vehicles) as well as other transport injuries.",
        "source": "Institute for Health Metrics and Evaluation",
        "link": "http://ghdx.healthdata.org/gbd-results-tool",
        "notes": "The sum of years lost due to premature death (YLLs) and years lived with disability (YLDs). DALYs are also defined as years of healthy life lost. It is a universal metric that allows researchers and policymakers to compare very different populations and health conditions across time. One DALY equals one lost year of healthy life. DALYs allow us to estimate the total number of years lost due to specific causes and risk factors at the country, regional, and global levels.\r\n\r\nIn the SPI calculations the indicator is capped at the upper boundary at 3219.5."
    },
    {
        "indicator_number": "17",
        "dimension": "Basic Human Needs",
        "component": "Personal Safety",
        "indicator_name": "Political killings and torture ",
        "unit_of_measurement": "(0=low freedom; 1=high freedom)",
        "definition": "Physical violence index  is based on indicators that reflect violence committed by government agents and that are not directly referring to elections.",
        "source": "Varieties of Democracy (V-Dem), Dataset Version 12",
        "link": "https://v-dem.net/vdemds.html",
        "notes": "The indicator measures physical integrity which is understood as freedom from political killings and torture by the government. Among the set of civil liberties, these liberal rights are the most relevant for political competition and accountability. \r\n",
        "variable_name_in_original_souce": " Variable name: v2x_clphy"
    },
    {
        "indicator_number": "18",
        "dimension": "Basic Human Needs",
        "component": "Personal Safety",
        "indicator_name": "Intimate partner violence",
        "unit_of_measurement": "(% of women aged 15+) ",
        "definition": "Age-standardised prevalence of ever-partnered women aged 15 years and older who experienced physical or sexual violence by a current or former intimate partner in the last 12 months (%).",
        "source": "Institute for Health Metrics and Evaluation",
        "link": "http://ghdx.healthdata.org/record/ihme-data/gbd-2017-health-related-sdgs-1990-2030"
    },
    {
        "indicator_number": "19",
        "dimension": "Basic Human Needs",
        "component": "Personal Safety",
        "indicator_name": "Money stolen",
        "unit_of_measurement": "(proportion of pop.) ",
        "definition": "The proportion of respondents answering 'yes' to the question, \"Within the last 12 months, have you had money or property stolen from you or another household member?\"",
        "source": "Gallup World Poll",
        "link": "https://ga.gallup.com/",
        "notes": "In the SPI calculations the indicator is calculated as floating 3-year average to limit volatility. "
    }
]
*/