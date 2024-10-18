import React from 'react';
import './css/footer.css';

import arrow from './icons/arrow.svg'

const Footer = ({ lang }) => {
    return (
        <footer>
            <div className="container padding">

                <div className="footer__content">

                    <div className="logo__container">
                        <h2>LOGO.</h2>

                        <p>{lang.slogan}</p>
                    </div>

                    <div className="services">
                        <h3>{lang.services.title}</h3>

                        {lang?.services?.items?.map((el, i) => (
                            <p key={i}>{el}</p>
                        ))}
                    </div>

                    <nav>
                        <a href='#' className="up__button">

                            <svg viewBox="0 0 14.2711 6.52316" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                <desc>
                                        Created with Pixso.
                                </desc>
                                <defs/>
                                <path id="path" d="M0.63 6.4L0.63 6.43C0.47 6.56 0.23 6.55 0.09 6.38C-0.05 6.22 -0.03 5.98 0.13 5.84L0.16 5.84L0.63 6.4ZM14.1 5.84L14.13 5.84C14.29 5.98 14.31 6.22 14.17 6.38C14.03 6.55 13.8 6.56 13.63 6.43L13.63 6.4L14.1 5.84Z" fill="#000000" fillOpacity="0" fillRule="nonzero"/>
                                <path id="path" d="M0.38 6.13L7.13 0.39L13.88 6.13" stroke="#FFFFFF" strokeOpacity="1.000000" strokeWidth="0.768000" strokeLinejoin="round" strokeLinecap="round"/>
                            </svg>

                            {lang.navigation.button}
                        </a>

                        <a href="#about" className="nav_items">{lang.navigation.links.aboutUs}</a>
                        <a href="#services" className="nav_items">{lang.navigation.links.services}</a>
                        <a href="#contacts" className="nav_items">{lang.navigation.links.contactUs}</a>
                    </nav>

                </div>

                <div className="line"></div>

                <div className="copyright">{lang.copyright}</div>

            </div>
        </footer>
    );
};

export default Footer;