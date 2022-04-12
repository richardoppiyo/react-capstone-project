import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { BsArrowRightCircle } from 'react-icons/bs';
import { displayCountryInfo } from '../app/apis/details';

const Details = () => {
  const param = useParams();
  const countries = useSelector((store) => store.details);
  const filtered = countries.filter((item) => item.country === param.country);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(displayCountryInfo());
  }, []);
  return (
    <>
      {filtered.map((country) => (
        <div key="{country.id}">
          <p>
            Total Cases:
            {' '}
            {country.country}
          </p>
          <p>
            Total tested:
            {' '}
            {country.tests}
          </p>
          <p>
            Population:
            {' '}
            {country.population}
          </p>
          <p>
            Total deaths:
            {' '}
            {country.deaths}
          </p>
          <p>
            Total recovered:
            {' '}
            {country.recovered}
          </p>
          <p>
            Continent:
            {' '}
            {country.continent}
          </p>
          <Link to="/"><BsArrowRightCircle className="arrow" /></Link>
        </div>
      ))}

      {/* <h1>Details page</h1>
      <a href="/">To Home</a> */}
    </>
  );
};

export default Details;
