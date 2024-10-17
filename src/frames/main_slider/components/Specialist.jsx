import React from 'react';

const Specialist = ({specialist}) => {
    return (
        <div className="specialist">
            <img src="/images/notary.png" alt="" className='notary_img'/>
            <div className="info_block">
                <div className="name">{specialist.name}</div>
                <div className="position">{specialist.position}</div>
            </div>
        </div>
    );
};

export default Specialist;