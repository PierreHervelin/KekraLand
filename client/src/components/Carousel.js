import React, { useState } from 'react';
import { ImgCarouselSrc } from '../data/data'; 

const Carousel = () => {
    const [imgs]=useState(ImgCarouselSrc);
    
    const list=imgs.map(
        (item,i)=> <div key={i} className="slide" id={'slide'+i}></div>
    );

    return list;
};

export default Carousel;