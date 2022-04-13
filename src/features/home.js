import React, { useEffect, useState } from 'react';
import './home.css';
import { useDispatch, useSelector } from 'react-redux';
import { BsArrowRightCircle } from 'react-icons/bs';
import { GiWorld } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { displayCountries } from '../app/apis/covid';
// import handleSearch from './filter';

const Home = () => {
  const countries = useSelector((state) => state.myred);
  const [location, setLocation] = useState('');
  const dispatch = useDispatch();

  const filtered = countries.filter((item) => item.country.toLowerCase()
    .includes(location.toLowerCase()));

  useEffect(() => {
    if (countries.length === 0) {
      dispatch(displayCountries());
    }
  }, []);

  return (
    <>
      <div className="uppediv">
        <GiWorld style={{ width: '100px', height: '100px' }} />
        <h4 style={{ width: '50%' }}>Covid-19 cases and Analysis country by country</h4>
      </div>
      <div className="searchitems">
        <h4 className="headtext">STATS BY COUNTRY</h4>
        <div className="search">
          <input
            className="input-search"
            placeholder="Search by Country"
            value={location}
            onChange={(e) => { setLocation(e.target.value); }}
          />
        </div>
      </div>
      <div className="holder">
        {
           !filtered.length ? (
             <div className="heading">Enter a valid country!</div>
           ) : (
             filtered.map((country) => (
               <div key="{country.id}" className="innerdiv">
                 <div className="insidediv">
                   <Link to={`/Details/${country.country}`} style={{ color: '#fff' }}>
                     <BsArrowRightCircle />
                   </Link>
                 </div>
                 <img className="flag" src={`${country.flag}`} alt="hello" />
                 <div className="detailer">
                   <p className="contryname">{country.country}</p>
                   <p className="contrycases">
                     Cases:
                     {' '}
                     {country.cases}
                   </p>
                 </div>
               </div>
             ))
           )
        }
      </div>
    </>
  );
};

export default Home;
