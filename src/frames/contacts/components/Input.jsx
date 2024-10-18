import React from 'react';

const Input = ({value, callback, placeholder, type, name, error}) => {
    return (
        <div className="input_field">
            <input className={error ? 'error' : ''} type={type} value={value} onChange={(e) => callback(e.target.value, name)} placeholder={placeholder}/>
            <div className='error_mess'>{error}</div>
        </div>
    );
};

export default Input;