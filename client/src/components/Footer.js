import React, { useRef } from 'react';

const Footer = () => {
    const ref=useRef({})

    return (
        <div className='footer-container'>
            <footer>
                <div className='main'>
                    <ul>
                        <li>mention légales</li>
                        <li>conditions de ventes</li>
                        <li>politique et confidentialité</li>
                    </ul>
                    <ul>
                        <li>nous contacter</li>
                        <li>informations de livraison</li>
                        <li>retours et échanges</li>
                    </ul>
                </div>
                <hr/>
                <div className='reseaux'>
                    <div 
                        onClick={()=>{
                            ref.current.youtube.click()
                        }}
                    >youtube</div>
                    <div
                        onClick={()=>{
                            ref.current.insta.click()
                        }}
                    >instagram</div>
                    <div
                        onClick={()=>{
                            ref.current.twitter.click()
                        }}
                    >twitter</div>
                </div>
                <div className='credits'>
                    © Projet 0
                    <div>Julien</div>
                    <div>Alexandra</div>
                    <div>Emeric</div>
                    <div>Pierre</div>
                </div>
            </footer>
            <a 
                href='https://www.youtube.com/channel/UC4GTJ6FB6KTdlbwjoV-7btA' 
                target="_blank"
                ref={el=>ref.current['youtube']=el}
            />
            <a 
                href='https://www.instagram.com/kekraland/' 
                target="_blank"
                ref={el=>ref.current['insta']=el}
            />
            <a 
                href='https://twitter.com/kekra_fc' 
                target="_blank"
                ref={el=>ref.current['twitter']=el}
            />
        </div>
    );
};

export default Footer;