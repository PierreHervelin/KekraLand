import React, { useEffect, useRef, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { User } from '../data/data';

const Album = (props) => {
    const [isFixed, setIsFixed] = useState(false)
    const ref=useRef({})

    // observer :
    useEffect(()=>{
        const inViewport=(entries,observer)=>{
            entries.forEach(item=>{
                if(item.isIntersecting){
                    setIsFixed(false)
                }else{
                    setIsFixed(true)
                }
            })
        };

        const Obs=new IntersectionObserver(inViewport);

        const els=document.querySelectorAll('.observe')
        els.forEach(item=>{
            Obs.observe(item)
        })
    })

    return (
        <div className='product-album'>
            <Navbar />
            <div className="wrapper">
                <div className='sideContainer'>
                    <div className="leftSide">
                        <div className="albumImg">
                            <div>
                                <img src={props.album?.album.image} alt='' />
                            </div>
                        </div>
                        <div className="albumTracklist">
                            <h2>Tracklist</h2>
                            {props.album?.tracklist.map((item, i)=>
                                <div key={i}>
                                    <span>{item.numero}</span>
                                    <span>{item.titre}</span>
                                    <span>{item.temps}</span>
                                </div>
                            )}
                        </div>
                        
                    </div>

                    <div className={`rightSide ${isFixed?'fixed':''}`}>
                        <div className="albumContainer">
                            <h2>{props.album?.album.nom}</h2>
                            <div className="albumHr">
                                <hr />
                            </div>
                            <div className="containerButton">
                                <div>
                                    <p 
                                        ref={el=>ref.current.p=el}
                                    >Ajouté au panier</p>
                                    <button
                                        onClick={()=>{
                                            console.log(User.panier);
                                            User.panier.addProduit({
                                                id:props.album.album.ProduitId,
                                                nom:props.album.album.nom,
                                                prix:props.album.album.prix,
                                                image:props.album.album.image,
                                                quantite:1
                                            })
                                            ref.current.p.classList.add('active')
                                            setTimeout(() => {
                                                ref.current.p.classList.remove('active')
                                            }, 2000);
                                        }}
                                    >Ajouter au panier</button>
                                </div>
                                <p>{props.album?.album.prix} €</p>
                            </div>

                            <div className="albumDesc">
                                <h2>Description</h2>
                                <br/>
                                <p>{props.album?.album.description}</p>
                            </div>
  
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Album;