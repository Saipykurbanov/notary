import React, { useState } from 'react';
import './css/header.css';
import Button from '../../components/button/Button';
import Store from '../../utils/Store';
import Switch from './components/Switch';


const Header = ({lang}) => {

    const [isOpen, setIsOpen] = useState(false)
    Store.useListener('burger', setIsOpen)

    const open = (e) => {
        e.stopPropagation()
        Store.setListener('menu', 'open')
        setIsOpen(true)
    }

    const close = () => {
        setIsOpen(false)
        document.body.style.overflow = 'visible'
        Store.setListener('menu', false)
    }

    return (
        <header>
            <div className="container">
                <div className="logo">LOGO.</div>
                <nav>
                    <a href="">{lang.links.home}</a>
                    <a href="">{lang.links.about}</a>
                    <a href="">{lang.links.services}</a>
                    <a href="#contacts">{lang.links.contacts}</a>
                </nav>
                <div className="button_block">
                    <Switch />
                    <Button mode={'white mob'} content={lang.button}/>
                </div>
                <div className={`burger ${isOpen ? 'cross' : ''}`} onMouseDown={isOpen ? close : (e) => open(e)}>
                    <span></span><span className='bottom'></span>
                </div>
            </div>
        </header>
    );
};

export default Header;