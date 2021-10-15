import React, { useEffect } from 'react';

const Vreel3 = () => {
    let left=0;
    useEffect(() => {
        const nuages=document.querySelector('.nuages');
        setInterval(() => {
            if(left<-99){
                left=0;
            }
            nuages.style.left=left+'%';
            left-=0.05;
        }, 50);
    }, [])

    return (
        <main id='vreel3'>
            <div className='background'></div>
            <div className='plateforme'></div>
            <div className='nuages'>
                <div className='nuage'></div>
                <div className='nuage'></div>
            </div>
        </main>
    );
};

export default Vreel3;