import React from 'react';
import CountryList from '@components/CountryList'
import CurrencyInput from '@components/CurrencyInput'
import '@styles/currency.css'

const DefaultCurrency = (props) => {
    return (
        <div className="container">
            <CountryList />
            <CurrencyInput inputMask={props.inputMask}/>
        </div>
    );
};

export default DefaultCurrency;