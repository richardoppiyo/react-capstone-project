import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './header.css';

const Header = ({ children }) => (
  <main>
    <header className="head">
      <NavLink to="/" className="link-item"> 2022 </NavLink>
      <p>Most viewed</p>
      <div className="innerdiv">
        <p>imag1</p>
        <p>imag2</p>
      </div>
    </header>
    {children}
  </main>
);

Header.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Header;
