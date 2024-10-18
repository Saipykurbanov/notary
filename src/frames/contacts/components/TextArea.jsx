import React from 'react';

const TextArea = ({placeholder, value, error, callback, name}) => {
    return (
        <div className="input_field">
            <textarea name="" id="" placeholder={placeholder} rows={5} value={value} className={error ? 'error' : ''} onChange={(e) => callback(e.target.value, name)}></textarea>
            <div className='error_mess'>{error}</div>
        </div>
    );
};

export default TextArea;