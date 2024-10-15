import React, { useState } from 'react';
import SlideItem from './SlideItem';
import ButtonBlock from './ButtonBlock';

const Slider = ({slider}) => {

    const [page, setPage] = useState(1)

    const nextPage = () => {
        setPage(prev => prev + 1)
    }

    const prevPage = () => {
        setPage(prev => prev - 1)
    }

    return (
        <div className="slider">
            {slider?.length ?
                slider.map((el, i) => (
                    <SlideItem key={i} el={el} page={page} number={i+1}/>
                ))
            :<></>}
            <ButtonBlock nextPage={nextPage} prevPage={prevPage}/>
        </div>
    );
};

export default Slider;