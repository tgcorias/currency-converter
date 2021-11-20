import React from 'react';
import '@styles/input.css';

const CurrencyInput = (props) => {
    return (
        <div>
            <input type='number' placeholder={props.inputMask}/>
        </div>
    );
}

export default CurrencyInput;