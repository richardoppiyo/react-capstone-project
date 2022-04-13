const LOAD = 'reactcapstone/apis/LOAD';

const init = [];

export function load(country) {
  return {
    type: LOAD,
    country,
  };
}

const getApiCountry = async () => {
  const resp = await fetch('https://disease.sh/v3/covid-19/countries');
  const data = resp.json();

  return data;
};

export const displayCountryInfo = () => async (dispatch) => {
  const countryData = await getApiCountry();

  const countriesArray = countryData.map((ele) => ({
    // eslint-disable-next-line no-underscore-dangle
    id: ele.countryInfo._id,
    country: ele.country,
    cases: ele.cases,
    flag: ele.countryInfo.flag,
    deaths: ele.deaths,
    recovered: ele.recovered,
    tests: ele.tests,
    population: ele.population,
    continent: ele.continent,

  }));

  dispatch(load(countriesArray));
};

export default function detailsReducer(state = init, action) {
  switch (action.type) {
    case LOAD:
      return action.country;
    default:
      return state;
  }
}
