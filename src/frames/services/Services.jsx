import React from 'react';
import './css/services.css';
import Button from '../../components/button/Button';

const Services = ({ lang }) => {
    return (
        <div className='services_block'>
            <div className="container padding">
                <h2 className="gold_title">{lang.title}</h2>

                <div className="service__grid">

                    {lang?.items?.map(el => (
                        <div className="service__item">
                            <h3>{el.title}</h3>
                            
                            <div className="line"></div>

                            <p>{el.fill}</p>
                        </div>
                    ))}

                </div>

                <Button content={lang.button} mode={'white'}/>
            </div>
        </div>
    );
};

export default Services;