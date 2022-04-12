import React, { useEffect } from 'react';
import './home.css';
import { useDispatch, useSelector } from 'react-redux';
import { BsArrowRightCircle } from 'react-icons/bs';
import { displayCountries } from '../app/apis/covid';

const Home = () => {
  const countries = useSelector((state) => state.myred);
  const dispatch = useDispatch();

  useEffect(() => {
    // if (countries.length === 0) {
    dispatch(displayCountries());
    // }
  }, []);
  return (
    <>
      {/* console.log(countries); */}
      <h2>STATS BY COUNTRY</h2>
      <div className="holder">
        {
          countries.map((country) => (
            <div key="{country.id}" className="innerdiv">
              <img className="flag" src={`${country.flag}`} alt="hello" />
              <div className="detailer">
                {/* <BsArrowRightCircle /> */}
                <a href="/details">
                  {' '}
                  <BsArrowRightCircle />
                </a>
                <p>{country.country}</p>
                <p>
                  Cases:
                  {' '}
                  {country.cases}
                </p>
              </div>
            </div>
          ))
        }
        {/* <div className="innerdiv">
          <p>COUNTRY NAME</p>
          <p>1234 </p>
          <a href="/details">To details</a>
        </div>
        <div className="innerdiv">
          <p>COUNTRY NAME</p>
          <p>1234 </p>
          <a href="/details">To details</a>
        </div>
        <div className="innerdiv">
          <p>COUNTRY NAME</p>
          <p>1234 </p>
          <a href="/details">To details</a>
        </div>
        <div className="innerdiv">
          <p>COUNTRY NAME</p>
          <p>1234 </p>
          <a href="/details">To details</a>
        </div> */}
      </div>
    </>
  );
};

export default Home;
