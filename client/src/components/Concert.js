import Navbar from './Navbar';
import React, { useEffect, useRef, useState } from 'react';
import Footer from './Footer';
import { User } from '../data/data';


const Concert = (props) => {
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
        <div className="Containers-concert">
            <Navbar/>
            <div className="Container-concert">
               
            </div>
            <div className='product-concert'>
            <div className="wrapper">
                <div className='sideContainer'>
                    <div className="leftSide">
                        <div className="concertImg">
                            <div style={{backgroundImage: 'url(https://cdn.discordapp.com/attachments/889877593673854996/917373648917118997/kekraconcert2.jpg)'}}/>
                        </div>
                        
                    </div>

                    <div className={`rightSide ${isFixed?'fixed':''}`}>
                        <div className="concertContainer">
                            <h2>{props.album?.album.nom}</h2>
                            <div className="concertDesc">
                            <h4>La Défense</h4>
                            <p> 20h le 28/09 50, quai Rambaud 69002 Paris</p>
                          
                                <hr />
                            </div>
                            <div className="containerButton">
                                <div>
                                    <p 
                                        ref={el=>ref.current.p=el}
                                    >Ajouté au panier</p>
                                    <button
                                       onClick={()=>{
                                          /*   console.log(User.panier);
                                            User.panier.addProduit({
                                                id:props.album.album.ProduitId,
                                                nom:props.album.album.nom,
                                                prix:props.album.album.prix,
                                                image:props.album.album.image,
                                                quantite:1
                                            })*/
                                            ref.current.p.classList.add('active')
                                            setTimeout(() => {
                                                ref.current.p.classList.remove('active')
                                            }, 2000);
                                        }}
                                    >Ajouter au panier</button>
                                </div>
                                <p>20 €</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
        </div>
    );
};

export default Concert;