import React from 'react';
import CurrencyInput from '../components/CurrencyInput';
import '../styles/global.css'

const Main = () => {
    return (
        <>
            <CurrencyInput inputMask="$10" />
            <CurrencyInput inputMask="$1000"/>
        </>
    );
}

export default Main;
