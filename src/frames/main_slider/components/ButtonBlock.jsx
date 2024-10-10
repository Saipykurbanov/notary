import React from 'react';

const ButtonBlock = () => {
    return (
        <div className="button_block">
            <button>
                <div className="main">
                    <span className="arrow"></span>
                </div>
            </button>
            <button>
                <div className="main">
                    <span className="arrow right"></span>
                </div>
            </button>
        </div>
    );
};

export default ButtonBlock;