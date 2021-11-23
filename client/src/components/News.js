import React, { useEffect, useRef } from 'react';
import ConcertImage from '../asset/img/kekraconcert2.jpg'

const News = () => {
    const ref=useRef({})

    return (
        <div className='news'>
            <div className='title'>
                <h2>À la une</h2>
            </div>
            <div className='content'>
                <div className='concert observe'>
                    <h2>KEKRA EN CONCERT</h2>
                    <div className='img'>
                        <div className='back'></div>
                        <div className='infos'>
                            <h3>KEKRA</h3>
                            <h4>la défense, paris</h4>
                            <h4>22h</h4>
                            <h5>30 mars 2022</h5>
                            <button>prends ta place</button>
                        </div>
                    </div>
                </div>

                <div className='actu' ref={el=>ref.current['actu']=el}>
                    <div className='top observe'>
                        <div className='left'>
                            <div className='infos'>
                                <h2>box kekra</h2>
                                <button>voir plus</button>
                            </div>
                        </div>
                        <div className='right'>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div className='bottom observe'>
                        <div className='left'>
                            <div className='infos'>
                                <h3>derniers articles</h3>
                                <h4>jusqu'à -70%</h4>
                                <button>shopper</button>
                            </div>
                        </div>
                        <div className='right'></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default News;