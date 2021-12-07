
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';


const Shop = () => {

    const [content, setContent] = useState([])

    const getImages = async () => {
        const produit = await axios.get(
            'http://localhost:3001/api/produits/byCategorie',
            {
                params: {
                    categorie: 'vetement'
                }
            })
        const vetement = await axios.get(
            `http://localhost:3001/api/vetement/${produit.data[0].id}`
        )
        
        setContent([
            vetement.data,
            vetement.data,
            vetement.data,
            vetement.data,
            vetement.data,
            vetement.data,
            vetement.data,
            vetement.data,
            vetement.data,
            vetement.data,
            vetement.data,
        ])
    }

    const clickOnProd=(e)=>{
        const item = e.target;
        const index = item.dataset.index;
        const link=document.createElement('a')
        //console.log(content[index][0]);
        link.href=`/product/${content[index][0].ProduitId}`
        link.click()
      }

    useEffect(() => {
        console.log(content);
    }, [content])

    useEffect(() => {
        getImages()
    }, [])


    return (
        <div className="Containers-vetements" >
            <Navbar/>
            <div className="Container-vetement">
                {content.map((item, i) =>
                <div className="content-all" >
                    <div className='image' key={i}>
                       <img src={item[0].image} alt='' data-index={i} onClick={clickOnProd} />  
                    </div>
                    <div className='content'>
                            <div >
                                <h3>tee-shirt vreel</h3>
                            </div>
                            <div>
                                {item[0].prix} €
                            </div> 
                    </div>
                </div>
                )}
            </div>
            <Footer/>
        </div>
    );
};

export default Shop;