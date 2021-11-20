import React from 'react';
import Currency from '@containers/Currency';
import '@styles/global.css'

const Main = () => {
    return (
        <>
            <div className="page-cointainer">
                <Currency inputMask="$10"/>
                <h1>To</h1>
                <Currency inputMask="$10.000"/>
            </div>
        </>
    );
}

export default Main;
