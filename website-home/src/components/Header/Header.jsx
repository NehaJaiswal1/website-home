// Header.js

import React, { useState, useEffect } from 'react';
import { TextField } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import logo from '../../assets/logo.png';
import './Header.css';

const Header = () => {
  const [myOptions, setMyOptions] = useState([]);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Hide the header when scrolling down
      setIsHeaderVisible(scrollPosition < 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const getDataFromAPI = async () => {
      try {
        const response = await fetch('http://dummy.restapiexample.com/api/v1/employees');
        const data = await response.json();
        const employeeNames = data.data.map((employee) => employee.employee_name);
        setMyOptions(employeeNames);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getDataFromAPI();
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <div className={`header ${isHeaderVisible ? 'header-visible' : 'header-hidden'}`}>
      <img src={logo} alt="Logo" />
      <div className="header-search-div">
        <Autocomplete
          style={{ width: 400 }}
          freeSolo
          autoComplete
          autoHighlight
          options={myOptions}
          renderInput={(params) => (
            <TextField {...params} variant="outlined" label="Search" className="searchbar-textfield" />
          )}
        />
      </div>
    </div>
  );
};

export default Header;
