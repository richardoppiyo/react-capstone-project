const LOAD = 'reactcapstone/apis/LOAD';

const init = [
];

export function load(country) {
  return {
    type: LOAD,
    country,
  };
}

const getApiData = async () => {
  const res = await fetch('https://disease.sh/v3/covid-19/countries/');
  const data = await res.json();

  // console.log(data);
  return data;
};

export const displayCountries = () => async (dispatch) => {
  const countries = await getApiData();
  // const countriesArray = [];

  // Object.keys(countries).forEach((country) => {
  //   countriesArray.push({
  //     id: countries[country].id,
  //     name: countries[country].name,
  //   });
  // });

  // id: ele.countryInfo._id,
  //   country: ele.country,
  //   cases: ele.cases,
  //   image: ele.countryInfo.flag,

  const countriesArray = countries.map((ele) => ({
    // eslint-disable-next-line no-underscore-dangle
    id: ele.countryInfo._id,
    country: ele.country,
    cases: ele.cases,
    flag: ele.countryInfo.flag,
  }));

  // console.log(countriesArray);
  dispatch(load(countriesArray));
};

export default function myReducer(state = init, action) {
  switch (action.type) {
    case LOAD:
      // console.log('I am here!');
      return action.country;
    default:
      return state;
  }
}
