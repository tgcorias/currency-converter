import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@styles/countryList.css'
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap';

const CountryList = () => {
	const [dropdown, setDropdown] = useState(false);
	const [country, setCountry] = useState('Select');

	const toggleDropdown = () => {
		setDropdown(!dropdown);
	}
	
	const handleCountryChange = (e) => {
		setCountry(e.target.innerText);
		console.log('e.target.innerText: ', e.target.innerText);
		setDropdown(false);
	}
	// const countries = useGetProducts(API);
	return (
		<Dropdown isOpen={dropdown} toggle={toggleDropdown} size="lg">
			<DropdownToggle caret>
				{country}
			</DropdownToggle>
			<DropdownMenu>
				<DropdownItem header>Países</DropdownItem>
				<DropdownItem onClick={(e) => handleCountryChange(e)}>USA</DropdownItem>
				<DropdownItem onClick={(e) => handleCountryChange(e)}>ARG</DropdownItem>
				<DropdownItem onClick={(e) => handleCountryChange(e)}>EUR</DropdownItem>
			</DropdownMenu>
		</Dropdown>
	);
}

export default CountryList;