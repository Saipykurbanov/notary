import React from 'react';
import './css/slider.css';
import Contacts from './components/Contacts';
import Specialist from './components/Specialist';
import Slider from './components/Slider';


const MainSlider = ({lang}) => {

    return (
        <div className='main_slider'>
            <img src="/images/background.jpg" alt="" className='background'/>

            <div className="container flex wrapper">
                <Slider slider={lang.slider}/>
                <Specialist specialist={lang.specialist}/>
            </div>

            <Contacts />
        </div>
    );
};

export default MainSlider;