import React, { useEffect, useRef, useState} from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import { User } from '../data/data';

const Clothe = (props) => {
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
                        <div className="clothes">
                            <div>
                                <img src={props.vetement?.image} alt='' />
                            </div>
                        </div>  
                    </div>
                    <div className={`rightSide ${isFixed?'fixed':''}`}>
                        <div className="colthesContainer">
                            <h2>{props.vetement?.nom}</h2>
                            <div className="clothesDesc">
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
                                                id:props.vetement.ProduitId,
                                                nom:props.vetement.nom,
                                                prix:props.vetement.prix,
                                                image:props.vetement.image,
                                                quantite:1
                                            })
                                            ref.current.p.classList.add('active')
                                            setTimeout(() => {
                                                ref.current.p.classList.remove('active')
                                            }, 2000);
                                        }}
                                    >Ajouter au panier</button>
                                </div>
                                <p>{props.vetement?.prix} €</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Clothe;