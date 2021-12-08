import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';


const Shop = (props) => {

    const [content, setContent] = useState([])

    const getClothes = async () => {
        
        const response = await axios.get(
            `http://localhost:3001/api/vetement/bytype/${props.match.params.type}`
        )
        const clothes=response.data
        const array=[]
        for(let i in clothes){
            if(Number(i)===0){
                array.push([clothes[i]])
                continue
            }
            if(clothes[i].ProduitId===clothes[i-1].ProduitId){
                array[array.length-1].push(clothes[i])
            }else{
                array.push([clothes[i]])
            }
        }
        console.log(array);
        
        setContent(array)
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
        getClothes()
    }, [])


    return (
        <div className="Containers-vetements" >
            <Navbar/>
            <div className="Container-vetement">
                {content.map((item, i) =>
                    <div className="content-all" key={i}>
                        <div 
                            className='image' 
                            style={{backgroundImage:`url(${item[0].image})`}}
                            data-index={i} 
                            onClick={clickOnProd}
                        />
                        <div className='content'>
                            <h3>{item[0].nom}</h3>
                            <p>{item[0].prix} €</p>
                        </div>
                    </div>
                )}
            </div>
            <Footer/>
        </div>
    );
};

export default Shop;