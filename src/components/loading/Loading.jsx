import React, { useEffect, useState } from 'react';
import './css/loading.css';


const Loading = () => {

    const [load, setLoad] = useState('')

    useEffect(() => {

        let timer;

        timer = setTimeout(() => {
            setLoad('close')
        }, 3000)

        return () => {
            clearTimeout(timer)
        }

    }, [])

    return (
        <div className={`loading ${load}`}>
            <div className="load_wrapper">
                <div className="logo">LOGO.</div>
                <p className="name">Yessica Guevara</p>
            </div>
        </div>
    );
};

export default Loading;