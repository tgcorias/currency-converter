import React, {useState} from 'react';
const dotenv = require("dotenv");
import 'bootstrap/dist/css/bootstrap.min.css';
import '@styles/countryList.css'
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap';

const API = process.env.API+process.env.ACCESS_KEY;


const CountryList = ({country, setCountry}) => {
	const [countryName, setCountryName] = useState('Select');
	const [dropdown, setDropdown] = useState(false);
	const [flag, setFlag] = useState('');

	const countries = API;

	

	const toggleDropdown = () => {
		setDropdown(!dropdown);
	}


    	
	const handleCountryChange = (e, country) => {
		setCountryName(country.name);
		setFlag(country.flag);
		setDropdown(false);
        setCountry(country)
		console.log('country: ', country);
	}

	return (
		<Dropdown isOpen={dropdown} toggle={toggleDropdown} size="lg">
			
				<DropdownToggle caret>
					<img src={flag} alt={countryName.name} />
					{countryName}
				</DropdownToggle>
			
			

			<DropdownMenu className="dropdown-menu">

				<DropdownItem header>Países</DropdownItem>
				{countries.map(country => (
					<DropdownItem 
						key={country.id}
						onClick={(e) => handleCountryChange(e, country)}
					>
						<img src={country.flag} alt={country.name} />
						{country.name}
					</DropdownItem>
				))}

			</DropdownMenu>

				
		</Dropdown>
	);
}


export default CountryList;