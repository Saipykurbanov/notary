import React, { useEffect, useState } from 'react';

const Switch = () => {

    const [isOpen, setIsOpen] = useState(false)

    const obj = {en: 'en', ru: 'ru', esp: 'esp'}
    const [lang, setLang] = useState(() => {
        const lang = obj[window.location.pathname.split('/')[1]] || obj[navigator.language] || 'en'
        return lang
    })

    const toggle = (e) => {
        e.stopPropagation()
        if(isOpen) {
            setIsOpen(false)
        } else {
            setIsOpen(true)
        }
    }

    const close = () => {
        setIsOpen(false)
    }

    const localSwitch = (path) => {
        window.location.href = `/${path}`
    }

    useEffect(() => {

        window.addEventListener('mousedown', close)

        return () => {
            window.removeEventListener('mousedown', close)
        }

    }, [])

    return (
        <div className="lang_switch">

            <button className='switch_btn' onMouseDown={toggle}>
                {lang}
                <svg className={isOpen ? 'active' : ''} width="14.271118" height="6.526367" viewBox="0 0 14.2711 6.52637" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <defs/>
                    <path id="path" d="M0.63 0.12L0.63 0.09C0.47 -0.05 0.23 -0.03 0.09 0.13C-0.05 0.3 -0.03 0.53 0.13 0.67L0.16 0.67L0.63 0.12ZM14.1 0.67L14.13 0.67C14.29 0.53 14.31 0.3 14.17 0.13C14.03 -0.03 13.8 -0.05 13.63 0.09L13.63 0.12L14.1 0.67Z" fill="#000000" fillOpacity="0" fillRule="nonzero"/>
                    <path id="path" d="M0.38 0.38L7.13 6.12L13.88 0.38" stroke="#FFFFFF" strokeOpacity="1.000000" strokeWidth="0.768000" strokeLinejoin="round" strokeLinecap="round"/>
                </svg>
            </button>

            <div className={`switch_list ${isOpen ? 'active' : ''}`} onMouseDown={(e) => e.stopPropagation()}>
                <div className="switch_list_wrapper">
                    {Object.keys(obj).filter(item => item !== lang).map((el, i) => (
                        <p key={i} onMouseDown={(e) => localSwitch(el)}>{el}</p>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Switch;