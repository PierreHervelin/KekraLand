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
                            <div style={{backgroundImage: `url(${props.concert?.image})`}}/>
                        </div>
                        
                    </div>

                    <div className={`rightSide ${isFixed?'fixed':''}`}>
                        <div className="concertContainer">
                           
                            <div className="concertDesc">
                            <h2>{props.concert?.nom}</h2>
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
                                                id:props.concert.ProduitId,
                                                nom:props.concert.nom,
                                                prix:props.concert.prix,
                                                image:props.concert.image,
                                                quantite:1
                                            })
                                            ref.current.p.classList.add('active')
                                            setTimeout(() => {
                                                ref.current.p.classList.remove('active')
                                            }, 2000);
                                        }}
                                    >Ajouter au panier</button>
                                </div>
                                <p>{props.concert?.prix} €</p>
                            </div>
                            <div className="concertDesc">
                                <h2>Description</h2>
                                <br/>
                                <div dangerouslySetInnerHTML={{__html: props.concert?.description}} />

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