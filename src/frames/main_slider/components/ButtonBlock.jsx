import React from 'react';

const ButtonBlock = ({nextPage, prevPage}) => {
    return (
        <div className="button_block">
            <button onClick={prevPage}>
                <div className="main">
                    <span className="arrow"></span>
                </div>
            </button>
            <button onClick={nextPage}>
                <div className="main">
                    <span className="arrow right"></span>
                </div>
            </button>
        </div>
    );
};

export default ButtonBlock;