import React from 'react';
import './css/header.css';
import Button from '../../components/button/Button';

const Header = ({lang}) => {
    return (
        <header>
            <div className="container padding">
                <div className="logo">LOGO.</div>
                <nav>
                    <a href="">{lang.links.home}</a>
                    <a href="">{lang.links.about}</a>
                    <a href="">{lang.links.services}</a>
                    <a href="">{lang.links.contacts}</a>
                </nav>
                <div className="button_block">
                    <Button mode={'white'} content={lang.button}/>
                </div>
                <div className="burger">
                    <span></span><span></span>
                </div>
            </div>
        </header>
    );
};

export default Header;