import React, { useEffect, useRef, useState } from 'react';
import './css/menu.css';
import Store from '../../utils/Store';


const Menu = ({lang}) => {

    const [isOpen, setIsOpen] = useState(false)

    Store.useListener('menu', (data) => {
        document.body.style.overflow = 'hidden'
        setIsOpen(data)
    })

    const close = () => {
        setIsOpen(false)
        document.body.style.overflow = 'visible'
        Store.setListener('burger', false)
    }

    useEffect(() => {

        window.addEventListener('mousedown', close)

        return () => {
            window.removeEventListener('mousedown', close)
        }

    }, [])

    return (
        <div className={`menu ${isOpen}`} onMouseDown={(e) => e.stopPropagation()}>
            <nav>
                <a href="#" onClick={close}>{lang.links.home}</a>
                <a href="#about" onClick={close}>{lang.links.about}</a>
                <a href="#services" onClick={close}>{lang.links.services}</a>
                <a href="#contacts" onClick={close}>{lang.links.contacts}</a>
            </nav>
        </div>
    );
};

export default Menu;