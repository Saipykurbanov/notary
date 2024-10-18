import React from 'react';
import './css/button.css';

const Button = ({mode, content, callback}) => {
    return (
        <button className={`main_button ${mode}`} onClick={callback}>
            <div className="content">
                {content}
            </div>
        </button>
    );
};

export default Button;