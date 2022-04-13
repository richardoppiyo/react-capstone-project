import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { BsArrowRightCircle } from 'react-icons/bs';
import { displayCountryInfo } from '../app/apis/details';
import './details.css';

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
      <div className="box">
        {filtered.map((country) => (
          <div key="{country.id}">
            <div className="upperpart">
              <img className="flag" src={`${country.flag}`} alt="hello" />
              <div>
                <p>
                  Country:
                  {' '}
                  {country.country}
                </p>
                <p>
                  Population:
                  {' '}
                  {country.population}
                </p>
              </div>
            </div>
            <h3> Covid info breakdown</h3>
            <div className="innerbox">
              <p>Continent:</p>
              <p>
                {country.continent}
                <Link to="/"><BsArrowRightCircle className="arrow" /></Link>
              </p>
            </div>
            <div className="innerbox1">
              <p>Total Cases:</p>
              <p>
                {country.continent}
                <Link to="/"><BsArrowRightCircle className="arrow" /></Link>
              </p>
            </div>
            <div className="innerbox">
              <p>Total tested:</p>
              <p>
                {country.tests}
                <Link to="/"><BsArrowRightCircle className="arrow" /></Link>
              </p>
            </div>
            <div className="innerbox1">
              <p>Population:</p>
              <p>
                {country.population}
                <Link to="/"><BsArrowRightCircle className="arrow" /></Link>
              </p>
            </div>
            <div className="innerbox">
              <p>Total deaths:</p>
              <p>
                {country.deaths}
                <Link to="/"><BsArrowRightCircle className="arrow" /></Link>
              </p>
            </div>
            <div className="innerbox1">
              <p>Total recovered:</p>
              <p>
                {country.recovered}
                <Link to="/"><BsArrowRightCircle className="arrow" /></Link>
              </p>
            </div>

          </div>
        ))}

      </div>
    </>
  );
};

export default Details;
