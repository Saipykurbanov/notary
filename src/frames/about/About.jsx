import React from 'react';
import './css/about.css';

const About = ({lang}) => {
    return (
        <div className='about_block'>

            <div className="description_wrapper">
                <div className="description">
                    <h2 className="gold_title">{lang.title}</h2>

                    <p className="about__description">{lang.description}</p>
                </div>
            </div>

            <div className="offer_block">
                <div className="logo">YOUR LOGO</div>

                <div className="offer">{lang.offer}</div>
            </div>
            
        </div>
    );
};

export default About;