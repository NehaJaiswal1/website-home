



import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import logo from '../../assets/logo.png';
import './Header.css'


const Header = () => {
    const [myOptions, setMyOptions] = useState([])

const getDataFromAPI = () => {
	console.log("Options Fetched from API")

	fetch('http://dummy.restapiexample.com/api/v1/employees').then((response) => {
	return response.json()
	}).then((res) => {
	console.log(res.data)
	for (var i = 0; i < res.data.length; i++) {
		myOptions.push(res.data[i].employee_name)
	}
	setMyOptions(myOptions)
	})
}

  return (
    <div className="header">
      <img src={logo}/>
      <div className='header-search-div'>
      <Autocomplete
		style={{ width: 400 }}
		freeSolo
		autoComplete
		autoHighlight
		options={myOptions}
		renderInput={(params) => (
		<TextField {...params}
			onChange={getDataFromAPI}
			variant="outlined"
			label="Search "
            className='searchbar-textfield'
		/>
		)}
	/>
      </div>
    </div>
  );
};

export default Header;
