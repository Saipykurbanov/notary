import React, { useState } from 'react';
import './css/slider.css';
import NotarySlide from './components/NotarySlide';
import ButtonBlock from './components/ButtonBlock';


const MainSlider = ({lang}) => {

    const [page, setPage] = useState(1)

    return (
        <div className='main_slider'>
            <NotarySlide mode={`slide ${page >= 1 ? 'active':'prev'}`}/>

            <ButtonBlock />
        </div>
    );
};

export default MainSlider;