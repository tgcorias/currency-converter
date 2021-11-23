import React from 'react';
import '@styles/input.css';

const CurrencyInput = (props) => {

    return (
        <div>
            <input 
                type='number' 
                placeholder={props.inputMask} 
                readOnly={props.readonly}
                onChange={()=>props.setInputValue(event.target.value)}
                value={props.value}   
            />
        </div>
    );
}

export default CurrencyInput;