import React from 'react';
import './css/button.css';

const Button = ({mode, content, type}) => {
    return (
        <button type={type} className={`main_button ${mode}`}>
            <div className="content">
                {content}
            </div>
        </button>
    );
};

export default Button;