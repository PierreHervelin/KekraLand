import React, { useEffect, useState } from 'react';
import Album from '../components/Album';

const Product = (props) => {
    const [productType,setProductType]=useState(null)
    const product=props.match.params.name

    useEffect(()=>{

        if(['kekra','freebasevol04','vrealite','land'].includes(product)){
            setProductType('album')
        }else if([
            'ladefense',
            'nantes',
            'bercy',
            'accorhotelsarena'
        ]){
            setProductType('concert')
        }else{
            setProductType('vetement')
        }
    },[])

    switch (productType) {
        case 'concert':
            console.log('concert')
            return (
                <div>
                    <h2>concert</h2>
                </div>
            )
        case 'vetement':
            console.log('vetement')
            return (
                <div>
                    <h2>vetement</h2>
                </div>
            )
        case 'album':
            console.log('album')
            return (
                <Album album={product}/>
            )
        default:
            console.log('none')
            return (
                <div>
                    <h2>NONE</h2>
                </div>
            )
    }
};

export default Product;