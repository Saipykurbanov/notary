import React, { useEffect, useRef, useState } from 'react';
import './css/services.css';
import Button from '../../components/button/Button';

const Services = ({ lang }) => {
    const list = lang?.items?.length > 6 ? lang?.items?.slice(0, 6) : lang?.items
    const servicesContainer = useRef(null)
    const services = useRef(null)
    const documents = useRef(null)
    const button = useRef(null)
    const timer = useRef(null)

    const showMore = (e) => {
        button.current.style.opacity = '0'
        documents.current.style.opacity = '0'
        let height = servicesContainer.current.offsetHeight 
        services.current.style.height = `calc(10dvh + ${height}px)`

        timer.current = setTimeout(() => {
            services.current.scrollIntoView({
                behavior: 'smooth'
            })
            documents.current.style.transitionDelay = '0.8s'
            documents.current.style.opacity = '1'
            servicesContainer.current.style.opacity = '1'
            button.current.style.pointerEvents = 'none'
        }, 900)
    }

    useEffect(() => {

        return () => {
            if(timer.current) {
                clearTimeout(timer.current)
            }
        }
    }, [timer.current])

    return (
        <div className='services_wrapper'>
            <div className='services_block' id='#services'>
                <div className="container padding">
                    <h2 className="gold_title">{lang.title}</h2>
                    <div className="service__wrapper">
                        <div className="service__grid">

                            {list.map((el, i) => (
                                <div className="service__item" key={i}>
                                    <h3>{el.title}</h3>
                                    
                                    <div className="line"></div>

                                    <p>{el.fill}</p>
                                </div>
                            ))}

                        </div>
                    </div>

                    {lang?.items?.length > 6 &&
                        <button ref={button} className="main_button white" onClick={showMore}>
                            <div className="content">{lang.button}</div>
                        </button>                        
                    }

                </div>
            </div>

            {lang?.items?.length > 6 ? 
                <div className="all_services" id='services' ref={services}>
                    <div className="container padding" ref={servicesContainer}>
                        <h2 className="gold_title">{lang.allServicesTitle}</h2>

                        <p className="description">
                            {lang.allServicesFill}
                        </p>

                        <div className="all_services_list">
                            {lang?.items?.map(el => (
                                <div className='all_services_item_wrapper'>
                                    <div className="all_services_item">{el.title}</div>
                                    <div className="line"></div>
                                </div>
                            ))}
                        </div>

                        
                    </div>
                </div>
            :
                <></>
            }

            <div className="documents" >
                <div className="container padding" ref={documents}>
                    <h3>{lang.documentsTitle}</h3>

                    <p className="description">{lang.documentsFill}</p>

                    <div className="all_services_list">
                        {lang?.documentsItems?.map(el => (
                            <>
                                <div className="all_services_item">{el}</div>
                                <div className="line"></div>
                            </>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;