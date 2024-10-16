import React from 'react';

const Input = ({value, callback, placeholder, type}) => {
    return (
        <input className={''} type={type} value={value} onChange={callback} placeholder={placeholder}/>
    );
};

export default Input;