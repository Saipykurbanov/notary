import React from 'react';
import Button from '../../../components/button/Button';

const SlideItem = ({el, page, number}) => {
    return (
        <div className={`slide ${page === number ? 'active' : ''}`}>
            <h2 className="title">{el.title}</h2>
            <div className="description">{el.description}</div>
            {el.link ? <a href=""><Button mode={'fill'} content={el.button}/></a> : <></>}
        </div>
    );
};

export default SlideItem;